export const notiValidation = {
  emty: "Vui lòng không bỏ trống",
  email: "Vui lòng nhập đúng định dạng email",
  phone: "Số phải thuộc Vietnamese",
  letter: "Trường này không chứa số",
  min(number) {
    return `Vui lòng nhập tối thiểu ${number} kí tự`;
  },
  max(number) {
    return `Vui lòng nhập tối đa ${number} kí tự`;
  },
};
