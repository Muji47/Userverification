import { Modal } from "antd";
const InformationMessage = () => {
  let secondsToGo = 3;
  const modal = Modal.success({
    title: "Resend request",
    content: `Wait sending in 30 Sec`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};
export default InformationMessage;
