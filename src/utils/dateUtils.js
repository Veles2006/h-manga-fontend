// utils/dateUtils.js
export const dateAPIHandle = (isoString) => {
    return new Date(isoString)
        .toLocaleString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour12: false, // Định dạng 24h
            timeZone: 'Asia/Ho_Chi_Minh', // Múi giờ Việt Nam
        })
        .replace(',', ''); // Xóa dấu phẩy giữa giờ và ngày
};
