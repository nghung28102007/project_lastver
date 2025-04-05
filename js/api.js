// API handling for weather and calendar events
document.addEventListener('DOMContentLoaded', function() {
    // Weather API functionality
    const weatherInfo = document.getElementById('weather-info');
    const weatherHeaderInfo = document.querySelector('.weather-info-header');
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    
    // OpenWeatherMap API configuration
    const weatherApiKey = 'db604cb114d57ad23372e9d0274eb8a8'; // Replace with your actual API key
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    
    // Weather condition mapping (English to Vietnamese)
    const weatherConditions = {
        'Clear': 'Trời quang',
        'Clouds': 'Có mây',
        'Rain': 'Mưa',
        'Drizzle': 'Mưa phùn',
        'Thunderstorm': 'Giông bão',
        'Snow': 'Tuyết',
        'Mist': 'Sương mù',
        'Smoke': 'Khói',
        'Haze': 'Sương mờ',
        'Dust': 'Bụi',
        'Fog': 'Sương mù dày',
        'Sand': 'Cát',
        'Ash': 'Tro bụi',
        'Squall': 'Mưa đá',
        'Tornado': 'Lốc xoáy'
    };
    
    // Fallback weather data in case API fails
    const fallbackWeatherData = {
        'Bắc Ninh': { temp: 28, condition: 'Nắng nhẹ', humidity: 75, wind: 12 },
        'Hồ Chí Minh': { temp: 32, condition: 'Nắng nóng', humidity: 70, wind: 8 },
        'Đà Nẵng': { temp: 30, condition: 'Có mây', humidity: 65, wind: 15 },
        'Huế': { temp: 29, condition: 'Mưa nhẹ', humidity: 80, wind: 10 },
        'Nha Trang': { temp: 31, condition: 'Nắng', humidity: 68, wind: 14 }
    };
    
    // Get current date
    function getCurrentDate() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
    // Default city - Bắc Ninh (fixed city without search functionality)
    // Initialize weather header with date and default temperature immediately
    if (weatherHeaderInfo) {
        const currentDate = getCurrentDate();
        const defaultTemp = fallbackWeatherData['Bắc Ninh'].temp;
        weatherHeaderInfo.innerHTML = `Bắc Ninh: ${defaultTemp}°C | ${currentDate}`;
    }
    
    // Then fetch weather data
    fetchWeatherData('Bắc Ninh');
    
    // Update weather in header
    function updateWeatherHeader(city, temp) {
        if (weatherHeaderInfo) {
            const currentDate = getCurrentDate();
            if (temp !== undefined && temp !== null) {
                weatherHeaderInfo.innerHTML = `${city}: ${temp}°C | ${currentDate}`;
            } else {
                weatherHeaderInfo.innerHTML = `${city} | ${currentDate}`;
            }
        }
    }
    
    // Initialize weather header with date immediately
    if (weatherHeaderInfo) {
        const currentDate = getCurrentDate();
        const defaultTemp = fallbackWeatherData['Bắc Ninh'].temp;
        weatherHeaderInfo.innerHTML = `Bắc Ninh: ${defaultTemp}°C | ${currentDate}`;
    }
    
    // Immediately set date and temperature in header even before API response
    if (weatherHeaderInfo) {
        const currentDate = getCurrentDate();
        const defaultTemp = fallbackWeatherData['Bắc Ninh'].temp;
        weatherHeaderInfo.innerHTML = `Bắc Ninh: ${defaultTemp}°C | ${currentDate}`;
    }
    
    // Fetch weather data from OpenWeatherMap API
    function fetchWeatherData(city) {
        // Immediately update header with date and temperature even if weather data is loading
        if (weatherHeaderInfo) {
            const currentDate = getCurrentDate();
            // Use fallback temperature if available
            const defaultTemp = fallbackWeatherData[city] ? fallbackWeatherData[city].temp : null;
            if (defaultTemp !== null) {
                weatherHeaderInfo.innerHTML = `${city}: ${defaultTemp}°C | ${currentDate}`;
            } else {
                weatherHeaderInfo.innerHTML = `${city} | ${currentDate}`;
            }
        }
        
        if (weatherInfo) {
            // Show loading state
            weatherInfo.innerHTML = '<div class="weather-loading">Đang tải dữ liệu thời tiết...</div>';
            
            // Set a timeout to use fallback data if API takes too long
            const timeoutId = setTimeout(() => {
                if (fallbackWeatherData[city]) {
                    console.log('Using fallback data due to timeout');
                    updateWeather(city, fallbackWeatherData[city]);
                    // Also update header with fallback data
                    updateWeatherHeader(city, fallbackWeatherData[city].temp);
                }
            }, 3000); // 3 seconds timeout
            
            // Construct API URL
            const url = `${weatherApiUrl}?q=${encodeURIComponent(city)},vn&units=metric&appid=${weatherApiKey}`;
            
            // Fetch data from API
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Không thể kết nối đến API thời tiết');
                    }
                    return response.json();
                })
                .then(data => {
                    // Clear timeout as we got a response
                    clearTimeout(timeoutId);
                    
                    // Process and display weather data
                    updateWeather(city, {
                        temp: Math.round(data.main.temp),
                        condition: weatherConditions[data.weather[0].main] || data.weather[0].main,
                        humidity: data.main.humidity,
                        wind: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
                        icon: data.weather[0].icon
                    });
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    // Clear timeout as we got an error response
                    clearTimeout(timeoutId);
                    
                    // Use fallback data if available, otherwise show error
                    if (fallbackWeatherData[city]) {
                        updateWeather(city, fallbackWeatherData[city]);
                    } else {
                        weatherInfo.innerHTML = `<div class="weather-error">Lỗi: ${error.message}</div>`;
                        // Still update header with at least the date
                        if (weatherHeaderInfo) {
                            const currentDate = getCurrentDate();
                            weatherHeaderInfo.innerHTML = `${city} | ${currentDate}`;
                        }
                    }
                });
        }
    }
    
    // Update weather display with data
    function updateWeather(city, data) {
        if (weatherInfo) {
            // Create weather icon HTML
            let iconHtml = '';
            if (data.icon) {
                iconHtml = `<img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" alt="${data.condition}" class="weather-icon-img">`;
            } else {
                // Fallback icon based on condition
                let iconClass = 'fas fa-sun';
                if (data.condition.includes('mây')) iconClass = 'fas fa-cloud';
                if (data.condition.includes('mưa')) iconClass = 'fas fa-cloud-rain';
                if (data.condition.includes('giông')) iconClass = 'fas fa-bolt';
                iconHtml = `<i class="${iconClass}"></i>`;
            }
            
            weatherInfo.innerHTML = `
                <div class="weather-details">
                    <div class="weather-icon-large">${iconHtml}</div>
                    <div class="weather-temp">${data.temp}°C</div>
                    <div class="weather-condition">${data.condition}</div>
                    <div class="weather-meta">
                        <span><i class="fas fa-tint"></i> ${data.humidity}%</span>
                        <span><i class="fas fa-wind"></i> ${data.wind} km/h</span>
                    </div>
                </div>
            `;
            
            // Update header weather
            updateWeatherHeader(city, data.temp);
        }
    }
    
    // Calendar events functionality
    const calendarEvents = document.getElementById('calendar-events');
    
    // Sample calendar data (in a real app, this would come from an API)
    const events = [
        { teams: 'Việt Nam vs Thái Lan', time: '19:30', date: '15/06/2023', location: 'Mỹ Đình, Hà Nội' },
        { teams: 'Hà Nội FC vs HAGL', time: '18:00', date: '18/06/2023', location: 'Hàng Đẫy, Hà Nội' },
        { teams: 'TPHCM vs Viettel', time: '19:00', date: '20/06/2023', location: 'Thống Nhất, TP.HCM' }
    ];
    
    if (calendarEvents) {
        let eventsHTML = '';
        
        events.forEach(event => {
            eventsHTML += `
                <div class="calendar-event">
                    <div class="event-teams">${event.teams}</div>
                    <div class="event-meta">
                        <span><i class="far fa-clock"></i> ${event.time} - ${event.date}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                    </div>
                </div>
            `;
        });
        
        calendarEvents.innerHTML = eventsHTML;
         
        // Initialize calendar slider functionality
        initCalendarSlider();
    }
    
    // Calendar slider functionality
    function initCalendarSlider() {
        const sliderContainer = document.querySelector('.calendar-slider-container');
        const prevBtn = document.getElementById('calendar-prev');
        const nextBtn = document.getElementById('calendar-next');
        const slides = document.querySelectorAll('.calendar-event');
        
        if (!sliderContainer || !prevBtn || !nextBtn || slides.length === 0) return;
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Set initial state
        updateSliderButtons();
        
        // Add event listeners to buttons
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSliderPosition();
                updateSliderButtons();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSliderPosition();
                updateSliderButtons();
            }
        });
        
        // Update slider position based on current slide
        function updateSliderPosition() {
            sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Update button states based on current position
        function updateSliderButtons() {
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }
    }
});