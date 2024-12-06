const sendOrder = () => {
    const form = document.querySelector(".form-order");
    // Собираем данные из формы
    const formData = new FormData(form);

    // Формируем объект с данными
    const orderData = {
        id: '',// Идентификатор, сгенерированный сервером при создании ордера
        full_name: formData.get('name'),
        email: formData.get('email'),
        subscribe: '', 
        phone: formData.get('number-tel'),
        delivery_address: formData.get('address'),
        delivery_type: formData.get('delivery-time'), 
        delivery_time: formData.get('time'),
        comment: formData.get('feedback'),
        soup_id: SaveSoup.id,
        main_course_id: SaveMainDish.id,
        salad_id: SaveSaladstarter.id,
        drink_id: SaveDrink.id,
        dessert_id: SaveDessert.id,
        created_at: '', 
        updated_at: '',
        student_id: '', 
        // totalOrder: formData.get('total-order'),
        // deliveryHour: formData.get('time')
    };

    const urlEncodedData = new URLSearchParams(orderData).toString();
    // Ensure the elements are defined in your HTML
    const messageText = document.getElementById("message-text");
    const messageBox = document.getElementsByClassName("message-box");

    // Отправляем запрос с данными заказа на сервер
    fetch("https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c", {
        //  http://lab8-api.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c
        method: "POST",
        body: urlEncodedData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            accept: 'application/json',

        },

    })
        .then(response => {
            // Проверяем код состояния HTTP перед попыткой анализа JSON
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                SuccessMessage();
                console.log("Ответ от сервера: ", data);
                // Можно очистить форму или предпринять другие действия
            }
        })
        .catch(error => {
            // Если ошибка при отправке запроса
            EventCatch();
            console.error("Ошибка при отправке данных: ", error);
        });
};


// const sendOrder = () => {
//     const form = document.querySelector(".form-order");
//     // Lấy dữ liệu từ form
//     const formData = new FormData(form);

//     // Tạo đối tượng chứa dữ liệu đơn hàng
//     const orderData = {
//         id: '', // ID do server tạo khi đơn hàng được tạo
//         full_name: formData.get('name'),
//         email: formData.get('email'),
//         subscribe: '', // Đặt mặc định là 1, nếu người dùng muốn đăng ký
//         phone: formData.get('number-tel'),
//         delivery_address: formData.get('address'),
//         delivery_type: 'now', // Có thể thay đổi nếu có yêu cầu từ người dùng
//         delivery_time: formData.get('time'),
//         comment: formData.get('feedback'),
//         soup_id: '1',// formData.get('soup'),
//         main_course_id: '7',// formData.get('main-food'),
//         salad_id: '13',// formData.get('saladstarter'),
//         drink_id: '19',// formData.get('drink'),
//         dessert_id: '25',// formData.get('dessert'),
//         created_at: '', // Trường này do server tạo
//         updated_at: '', // Trường này do server tạo
//         student_id: '', // Nếu cần, lấy từ session hoặc user info
//     };

//     // Chuyển đổi dữ liệu thành dạng URL-encoded
//     const urlEncodedData = new URLSearchParams(orderData).toString();
//      console.log('check: ',orderData);
//     // Gửi yêu cầu POST tới server
//     fetch("https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=d446ff2f-4baf-4275-81c2-478e7acecc7c", {
//         method: "POST",
//         body: urlEncodedData,
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             accept: 'application/json',
//         },
//     })
//     .then(response => {
//         // Kiểm tra nếu có lỗi từ server
//         if (!response.ok) {
//             throw new Error(`Server error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data) {
//             // Hiển thị thông báo thành công và xóa dữ liệu đơn hàng khỏi localStorage
//             alert("Đặt hàng thành công!");
//             console.log("Dữ liệu từ server:", data);
//             localStorage.removeItem('orderData'); // Xóa dữ liệu đơn hàng khỏi localStorage
//         }
//     })
//     .catch(error => {
//         // Hiển thị thông báo lỗi khi có sự cố
//         alert(`Lỗi khi gửi đơn hàng: ${error.message}`);
//         console.error("Lỗi khi gửi đơn hàng: ", error);
//     });
// };
