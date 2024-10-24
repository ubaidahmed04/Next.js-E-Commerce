import { toast } from 'react-toastify';

const successNotify = (message) => toast.success(message);
const errorNotify = (message) => toast.error(message);
const warningNotify = (message) => toast.warning(message);



export { successNotify, errorNotify, warningNotify };