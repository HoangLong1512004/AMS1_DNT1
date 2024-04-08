import axios from "axios"


const addContact = async data => {
    try {
      const response = await axios.post(
        'https://65d5cdc1f6967ba8e3bc9fe3.mockapi.io/api/v1/contact',
        data,
      );
      return response.data; // Trả về dữ liệu từ phản hồi
    } catch (error) {
      console.error('Error adding data:', error);
      throw error; // Xử lý lỗi
    }
  };

export { addContact }