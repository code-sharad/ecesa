import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { to, subject } = await req.json();
    try {
        const { data, error } = await resend.emails.send({
            from: 'codesharad@gmail.com',
            to: [to],
            subject: subject,
            html: '<strong>It works!</strong>',
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}