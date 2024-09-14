import { loginIsRequiredServer } from "@/lib/auth";
import FeedbackForm from "./feedbackform";

export default async function Feedback() {
    await loginIsRequiredServer();
    
    return (
        <FeedbackForm />
    );
}
