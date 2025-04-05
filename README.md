# Hướng dẫn sử dụng Weather API

## Cách lấy API Key từ OpenWeatherMap

1. Truy cập trang web [OpenWeatherMap](https://openweathermap.org/)
2. Đăng ký tài khoản mới hoặc đăng nhập nếu đã có tài khoản
3. Sau khi đăng nhập, vào mục "API Keys" trong trang cá nhân của bạn
4. Tạo một API key mới hoặc sử dụng key mặc định đã được tạo
5. Lưu ý: API key mới có thể mất khoảng 2 giờ để kích hoạt

## Cách thêm API Key vào ứng dụng

1. Mở file `js/api.js`
2. Tìm dòng có nội dung: `const weatherApiKey = 'YOUR_API_KEY';`
3. Thay thế `YOUR_API_KEY` bằng API key bạn đã lấy được từ OpenWeatherMap
4. Lưu file và tải lại trang web

## Tính năng của Weather API

- Hiển thị thông tin thời tiết hiện tại cho các thành phố ở Việt Nam
- Hiển thị nhiệt độ, điều kiện thời tiết, độ ẩm và tốc độ gió
- Tự động cập nhật thông tin thời tiết khi tìm kiếm thành phố mới
- Có dữ liệu dự phòng trong trường hợp không thể kết nối đến API

## Lưu ý

- API miễn phí của OpenWeatherMap có giới hạn 60 lần gọi/phút và 1,000,000 lần gọi/tháng
- Dữ liệu thời tiết được cập nhật mỗi 10 phút từ OpenWeatherMap