import { Modal } from "antd";
const InformationMessage = () => {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'Resend Code',
    content: `Wait! for 30 sec verification code sending to you.`,
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
