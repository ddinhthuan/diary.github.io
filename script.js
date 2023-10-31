function calculateResult() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Lấy giá trị phép tính được chọn
    const operationElements = document.getElementsByName('operation');
    let operation;
    for (let i = 0; i < operationElements.length; i++) {
        if (operationElements[i].checked) {
            operation = operationElements[i].value;
            break;
        }
    }

    const notification = document.getElementById('notification');
    const result = document.getElementById('result');

    console.log(number1, number2, operation, notification);
    // Kiểm tra điều kiện và hiển thị thông báo lỗi
    if (isNaN(number1) || isNaN(number2)) {
        notification.value = 'Vui lòng nhập số thứ nhất và số thứ hai.';
        result.value = '';
    } else if (!operation) {
        notification.value = 'Vui lòng chọn phép tính.';
        result.value = '';
    } else {
        let calculatedResult;
        switch (operation) {
            case '+':
                calculatedResult = number1 + number2;
                break;
            case '-':
                calculatedResult = number1 - number2;
                break;
            case '*':
                calculatedResult = number1 * number2;
                break;
            case '/':
                if (number2 !== 0) {
                    calculatedResult = number1 / number2;
                } else {
                    notification.value = 'Không thể chia cho 0.';
                    result.value = '';
                    return;
                }
                break;
            default:
                notification.value = 'Phép tính không hợp lệ.';
                result.value = '';
                return;
        }

        notification.value = ''; // Xóa thông báo lỗi nếu có
        result.value = calculatedResult;
    }
}
