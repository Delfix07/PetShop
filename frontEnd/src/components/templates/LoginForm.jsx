import { loginFields } from "../../data/inputFields";
import Form from "../organisms/Form";

export default function LoginForm() {
  return <Form formTitle="LogIn" inputs={loginFields} className="" />;
}