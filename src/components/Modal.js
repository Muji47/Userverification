
import { Modal } from 'antd';
const countDown = () => {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'Resend code',
    content: `Wait for 30 sec verification code is sending to your email.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();

  }, secondsToGo * 1000);
};
export default countDown
