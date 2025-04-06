// Global translations object
const translations = {
    // Navigation and common elements
    vi: {
        // Menu items
        home: 'Trang chủ',
        news: 'Tin tức',
        schedule: 'Lịch thi đấu',
        comments: 'Bình luận',
        login: 'Đăng nhập',
        language: '',
        darkMode: 'Chế độ tối',
        lightMode: 'Chế độ sáng',
        logOut: 'Đăng xuất',
        
        // Common UI elements
        newsHeading: 'Tin tức bóng đá mới nhất',
        readMore: 'Đọc tiếp',
        commentSection: 'Bình luận',
        writeComment: 'Viết bình luận của bạn...',
        sendComment: 'Gửi',
        backToTop: 'Về đầu trang',
        quickLinks: 'Liên kết nhanh',
        contact: 'Liên hệ',
        copyright: 'Tất cả quyền được bảo lưu.',

        // Footer
        footerTagline: 'Tin tức bóng đá hàng đầu Việt Nam',
        
        // Article page specific
        matchLineup: 'Đội hình dự kiến',
        tactics: 'Phân tích chiến thuật',
        history: 'Lịch sử đối đầu',
        prediction: 'Dự đoán kết quả',
        broadcast: 'Thông tin phát sóng',
        
        // Weather widget
        selectCity: 'Chọn thành phố:',
        wind: 'Gió',
        humidity: 'Độ ẩm',
        clouds: 'Mây',
        loading: 'Đang tải...',
        
        // Calendar widget
        calendarTitle: 'Tháng',
        months: [
            'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 
            'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
        ],
        weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        previousMonth: 'Tháng trước',
        nextMonth: 'Tháng sau'
    },
    
    en: {
        // Menu items
        home: 'Home',
        news: 'News',
        schedule: 'Match Schedule',
        comments: 'Comments',
        login: 'Sign In',
        language: '',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        logOut: 'Log out',
        
        // Common UI elements
        newsHeading: 'Latest Football News',
        readMore: 'Read more',
        commentSection: 'Comments',
        writeComment: 'Write your comment...',
        sendComment: 'Send',
        backToTop: 'Back to top',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        copyright: 'All rights reserved.',

        // Footer
        footerTagline: 'Leading football news in Vietnam',
        
        // Article page specific
        matchLineup: 'Expected lineup',
        tactics: 'Tactical analysis',
        history: 'Head-to-head history',
        prediction: 'Match prediction',
        broadcast: 'Broadcast information',
        
        // Weather widget
        selectCity: 'Select city:',
        wind: 'Wind',
        humidity: 'Humidity',
        clouds: 'Clouds',
        loading: 'Loading...',
        
        // Calendar widget
        calendarTitle: 'Month',
        months: [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        previousMonth: 'Previous month',
        nextMonth: 'Next month'
    },

    // Article translations
    articles: {
        // Article 1
        article1: {
            vi: {
                title: 'Trận đấu nổi bật: Việt Nam vs Thái Lan',
                meta: {
                    date: '15/06/2023',
                    author: 'Nguyễn Văn A'
                },
                content: [
                    'Đội tuyển Việt Nam sẽ đối đầu với Thái Lan trong trận cầu được mong đợi nhất vòng loại World Cup 2026 khu vực châu Á. Trận đấu diễn ra vào 19h30 tối nay tại sân vận động Mỹ Đình, Hà Nội.',
                    'HLV Park Hang-seo đã công bố đội hình ra sân với nhiều bất ngờ. Tiền đạo Nguyễn Công Phượng sẽ đá chính sau thời gian dài ngồi dự bị. Hàng thủ được củng cố với sự trở lại của Đỗ Duy Mạnh.',
                    'Đội tuyển Việt Nam nhiều khả năng sẽ áp dụng lối chơi phòng ngự phản công quen thuộc. Với tốc độ của Văn Toàn và kỹ thuật của Quang Hải, đội tuyển có thể tạo ra những đợt tấn công nguy hiểm.',
                    'Trong khi đó, đội tuyển Thái Lan với HLV Mano Polking sẽ chơi tấn công áp đặt với sơ đồ 4-3-3. Chanathip Songkrasin vẫn là ngôi sao được kỳ vọng sẽ tỏa sáng bên phía đội khách.',
                    'Trong 10 trận gần nhất, Việt Nam thắng 3, hòa 4 và thua 3 trước Thái Lan. Trận đấu gần nhất giữa hai đội kết thúc với tỷ số hòa 0-0 tại AFF Cup 2022.',
                    'Với lợi thế sân nhà và phong độ ổn định gần đây, đội tuyển Việt Nam được đánh giá cao hơn trong trận đấu này. Nhiều chuyên gia dự đoán một chiến thắng sát nút 1-0 hoặc 2-1 cho đội chủ nhà.',
                    'Trận đấu sẽ được phát sóng trực tiếp trên các kênh VTV6, VTV5 và ứng dụng VTV Go từ 19h00, với 30 phút bình luận trước trận đấu.'
                ]
            },
            en: {
                title: 'Featured Match: Vietnam vs Thailand',
                meta: {
                    date: '06/15/2023',
                    author: 'Nguyen Van A'
                },
                content: [
                    'Vietnam national team will face Thailand in the most anticipated match of the World Cup 2026 qualification round in the Asian region. The match will take place tonight at 7:30 PM at My Dinh Stadium, Hanoi.',
                    'Coach Park Hang-seo has announced the starting lineup with several surprises. Forward Nguyen Cong Phuong will start after spending a long time on the bench. The defense has been strengthened with the return of Do Duy Manh.',
                    'Vietnam is likely to employ their familiar counter-attacking style. With Van Toan\'s speed and Quang Hai\'s technical skills, the team can create dangerous attacks.',
                    'Meanwhile, Thailand under coach Mano Polking will play an aggressive attacking style with a 4-3-3 formation. Chanathip Songkrasin remains the star expected to shine for the visitors.',
                    'In the last 10 matches, Vietnam has won 3, drawn 4, and lost 3 against Thailand. The most recent match between the two teams ended in a 0-0 draw in the AFF Cup 2022.',
                    'With home advantage and recent stable performance, Vietnam is rated higher in this match. Many experts predict a narrow victory of 1-0 or 2-1 for the home team.',
                    'The match will be broadcast live on VTV6, VTV5 channels and the VTV Go app from 7:00 PM, with 30 minutes of pre-match commentary.'
                ]
            }
        },
        // Additional articles can be added here
        article2: {
            vi: {
                title: 'Top 10 cầu thủ xuất sắc nhất năm 2023',
                meta: {
                    date: '05/04/2023',
                    author: 'Lê Văn H'
                },
                content: [
                    'Danh sách 10 cầu thủ xuất sắc nhất năm 2023 đã được công bố.',
                    'Các cầu thủ được đánh giá dựa trên phong độ, thành tích cá nhân và đóng góp cho câu lạc bộ và đội tuyển quốc gia.',
                    'Không có gì ngạc nhiên khi Lionel Messi vẫn dẫn đầu danh sách sau một năm thành công với Inter Miami và vô địch World Cup cùng Argentina.',
                    'Trong khi đó, Cristiano Ronaldo vẫn giữ được vị trí trong top 5 dù đã bước sang tuổi 38.',
                    'Đáng chú ý, có 2 cầu thủ trẻ mới nổi lần đầu góp mặt trong danh sách này: Jude Bellingham và Jamal Musiala.'
                ]
            },
            en: {
                title: 'Top 10 Best Football Players of 2023',
                meta: {
                    date: '04/05/2023',
                    author: 'Le Van H'
                },
                content: [
                    'The list of the 10 best football players of 2023 has been announced.',
                    'Players were evaluated based on form, individual achievements, and contributions to their clubs and national teams.',
                    'Not surprisingly, Lionel Messi still leads the list after a successful year with Inter Miami and winning the World Cup with Argentina.',
                    'Meanwhile, Cristiano Ronaldo still maintains his position in the top 5 despite being 38 years old.',
                    'Notably, there are two young emerging players appearing on this list for the first time: Jude Bellingham and Jamal Musiala.'
                ]
            }
        }
    },
    
    // News cards on main page
    newsCards: {
        card1: {
            vi: {
                title: 'Trận đấu nổi bật: Việt Nam vs Thái Lan',
                date: '15/04/2023',
                author: 'Nguyễn Văn A',
                excerpt: 'Đội tuyển Việt Nam sẽ đối đầu với Thái Lan trong trận cầu được mong đợi nhất vòng loại World Cup 2026 khu vực châu Á.'
            },
            en: {
                title: 'Featured Match: Vietnam vs Thailand',
                date: '04/15/2023',
                author: 'Nguyen Van A',
                excerpt: 'Vietnam national team will face Thailand in the most anticipated match of the World Cup 2026 qualification round in the Asian region.'
            }
        },
        card2: {
            vi: {
                title: 'Quang Hải được vinh danh Cầu thủ xuất sắc nhất tháng',
                date: '10/05/2023',
                author: 'Trần Văn B',
                excerpt: 'Tiền vệ Nguyễn Quang Hải đã được bầu chọn là Cầu thủ xuất sắc nhất tháng 5 sau chuỗi trận ấn tượng.'
            },
            en: {
                title: 'Quang Hai Named Player of the Month',
                date: '05/10/2023',
                author: 'Tran Van B',
                excerpt: 'Midfielder Nguyen Quang Hai has been voted as Player of the Month for May after an impressive string of performances.'
            }
        },
        card3: {
            vi: {
                title: 'V-League 2023: Những thay đổi quan trọng',
                date: '05/06/2023',
                author: 'Lê Thị C',
                excerpt: 'V-League 2023 sẽ có nhiều thay đổi quan trọng về thể thức thi đấu và quy định chuyển nhượng.'
            },
            en: {
                title: 'V-League 2023: Important Changes',
                date: '06/05/2023',
                author: 'Le Thi C',
                excerpt: 'V-League 2023 will undergo significant changes in competition format and transfer regulations.'
            }
        },
        card4: {
            vi: {
                title: 'Đội tuyển nữ Việt Nam chuẩn bị cho World Cup 2023',
                date: '01/05/2023',
                author: 'Phạm Thu D',
                excerpt: 'Đội tuyển nữ Việt Nam đang tích cực chuẩn bị cho World Cup nữ 2023...'
            },
            en: {
                title: 'Vietnam Women\'s Team Prepares for 2023 World Cup',
                date: '05/01/2023',
                author: 'Pham Thu D',
                excerpt: 'Vietnam\'s women\'s national team is actively preparing for the 2023 Women\'s World Cup...'
            }
        },
        card5: {
            vi: {
                title: 'Thị trường chuyển nhượng Hè 2023 sôi động',
                date: '01/06/2023',
                author: 'Trần Thị G',
                excerpt: 'Các CLB lớn đang chuẩn bị cho kỳ chuyển nhượng Hè 2023 với nhiều thương vụ đáng chú ý...'
            },
            en: {
                title: 'Active Summer 2023 Transfer Market',
                date: '06/01/2023',
                author: 'Tran Thi G',
                excerpt: 'Major clubs are preparing for the Summer 2023 transfer window with many notable deals...'
            }
        },
        card6: {
            vi: {
                title: 'Hà Nội FC bổ nhiệm HLV mới cho mùa giải 2023-2024',
                date: '10/06/2023',
                author: 'Lê Văn H',
                excerpt: 'Hà Nội FC vừa chính thức bổ nhiệm huấn luyện viên mới cho mùa giải sắp tới...'
            },
            en: {
                title: 'Hanoi FC Appoints New Coach for 2023-2024 Season',
                date: '06/10/2023',
                author: 'Le Van H',
                excerpt: 'Hanoi FC has officially appointed a new coach for the upcoming season...'
            }
        }
    }
};

// Get the current language from localStorage, default to Vietnamese
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'vi';
}

// Set the language in localStorage
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
}

// Translate a specific key
function translateKey(key, lang) {
    const langObj = translations[lang] || translations.vi;
    return langObj[key] || key;
}

// Function to check if the current page is an article page
function isArticlePage() {
    return window.location.pathname.includes('/news/article');
}

// Function to get article ID from the URL
function getArticleId() {
    const path = window.location.pathname;
    const match = path.match(/article(\d+)/);
    return match ? match[0] : null;
}

// Apply translations to main news page
function translateNewsPage(lang) {
    // Update menu items
    const menuItems = document.querySelectorAll('#main-nav > ul > li > a:not(.dropdown-toggle):not(#light-mode-btn):not(#dark-mode-btn)');
    if (menuItems.length >= 5) {
        menuItems[0].textContent = translations[lang].home;
        menuItems[1].textContent = translations[lang].news;
        menuItems[2].textContent = translations[lang].schedule;
        menuItems[3].textContent = translations[lang].comments;
        menuItems[4].textContent = translations[lang].login;
    }
    
    // Update language dropdown text
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].language} <i class="fas fa-caret-down"></i>`;
    }
    
    // Update news heading
    const newsHeading = document.querySelector('.news-section h2');
    if (newsHeading) {
        newsHeading.textContent = translations[lang].newsHeading;
    }
    
    // Update read more links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        // Keep the icon but replace the text
        const icon = link.querySelector('i');
        link.textContent = translations[lang].readMore + ' ';
        if (icon) link.appendChild(icon);
    });
    
    // Update news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        const cardNumber = `card${index + 1}`;
        if (translations.newsCards[cardNumber]) {
            const cardData = translations.newsCards[cardNumber][lang];
            
            // Update title, date, author, excerpt
            const title = card.querySelector('h3');
            if (title && cardData.title) {
                title.textContent = cardData.title;
            }
            
            const meta = card.querySelectorAll('.news-meta span');
            if (meta.length >= 2) {
                if (cardData.date) {
                    meta[0].innerHTML = `<i class="far fa-calendar-alt"></i> ${cardData.date}`;
                }
                if (cardData.author) {
                    meta[1].innerHTML = `<i class="far fa-user"></i> ${cardData.author}`;
                }
            }
            
            const excerpt = card.querySelector('p');
            if (excerpt && cardData.excerpt) {
                excerpt.textContent = cardData.excerpt;
            }
        }
    });
    
    // Update footer
    updateFooter(lang);
}

// Apply translations to article page
function translateArticlePage(lang) {
    const articleId = getArticleId();
    
    if (articleId && translations.articles[articleId]) {
        const articleData = translations.articles[articleId][lang];
        
        // Update title
        const title = document.querySelector('.article-title');
        if (title && articleData.title) {
            title.textContent = articleData.title;
            // Also update page title
            document.title = articleData.title + ' - MindX News';
        }
        
        // Update meta info
        const meta = document.querySelectorAll('.article-meta span');
        if (meta.length >= 2 && articleData.meta) {
            if (articleData.meta.date) {
                meta[0].innerHTML = `<i class="far fa-calendar-alt"></i> ${articleData.meta.date}`;
            }
            if (articleData.meta.author) {
                meta[1].innerHTML = `<i class="far fa-user"></i> ${articleData.meta.author}`;
            }
        }
        
        // Update content
        if (articleData.content) {
            const contentElements = document.querySelectorAll('.article-content > p');
            articleData.content.forEach((paragraph, index) => {
                if (contentElements[index]) {
                    contentElements[index].textContent = paragraph;
                }
            });
            
            // Update subheadings
            const subheadings = document.querySelectorAll('.article-content > h3');
            if (subheadings.length >= 5) {
                subheadings[0].textContent = translations[lang].matchLineup;
                subheadings[1].textContent = translations[lang].tactics;
                subheadings[2].textContent = translations[lang].history;
                subheadings[3].textContent = translations[lang].prediction;
                subheadings[4].textContent = translations[lang].broadcast;
            }
        }
    }
    
    // Update navigation
    const menuItems = document.querySelectorAll('#main-nav > ul > li > a');
    if (menuItems.length >= 5) {
        menuItems[0].textContent = translations[lang].home;
        menuItems[1].textContent = translations[lang].news;
        menuItems[2].textContent = translations[lang].schedule;
        menuItems[3].textContent = translations[lang].comments;
        menuItems[4].textContent = translations[lang].login;
    }
    
    // Update comment section
    const commentHeading = document.querySelector('.comments-section > h3');
    if (commentHeading) {
        commentHeading.textContent = translations[lang].commentSection;
    }
    
    const commentPlaceholder = document.querySelector('#comment-input');
    if (commentPlaceholder) {
        commentPlaceholder.setAttribute('placeholder', translations[lang].writeComment);
    }
    
    const submitBtn = document.querySelector('#submit-comment');
    if (submitBtn) {
        submitBtn.textContent = translations[lang].sendComment;
    }
    
    // Update back to top button
    const backToTopBtn = document.querySelector('#back-to-top');
    if (backToTopBtn) {
        backToTopBtn.setAttribute('title', translations[lang].backToTop);
    }
    
    // Update footer
    updateFooter(lang);
}

// Common footer translation
function updateFooter(lang) {
    // Footer tagline
    const footerTagline = document.querySelector('.footer-logo p');
    if (footerTagline) {
        footerTagline.textContent = translations[lang].footerTagline;
    }
    
    // Quick links heading
    const quickLinksHeading = document.querySelector('.footer-links h3');
    if (quickLinksHeading) {
        quickLinksHeading.textContent = translations[lang].quickLinks;
    }
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-links li a');
    if (footerLinks.length >= 4) {
        footerLinks[0].textContent = translations[lang].home;
        footerLinks[1].textContent = translations[lang].news;
        footerLinks[2].textContent = translations[lang].schedule;
        footerLinks[3].textContent = translations[lang].comments;
    }
    
    // Contact heading
    const contactHeading = document.querySelector('.footer-contact h3');
    if (contactHeading) {
        contactHeading.textContent = translations[lang].contact;
    }
    
    // Copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        copyright.innerHTML = `&copy; ${new Date().getFullYear()} MindX News. ${translations[lang].copyright}`;
    }
}

// Main function to apply translations to the current page
function applyTranslations(lang) {
    if (isArticlePage()) {
        translateArticlePage(lang);
    } else {
        translateNewsPage(lang);
    }
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    
    // Apply initial translations
    applyTranslations(currentLang);
    
    // Update active language option
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
});
