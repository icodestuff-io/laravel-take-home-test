<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendEmailRequest;
use App\Mail\SendSubmissionMailer;
use Illuminate\Support\Facades\Mail;

class SendEmailController extends Controller
{
    /**
     * Send the email to the receiver.
     *
     * @param  \App\Http\Request\SendEmailRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(SendEmailRequest $request)
    {
        try {
            $data = $request->validated();

            Mail::to($data['email'])
                ->send(new SendSubmissionMailer(
                    email_subject: $data['subject'],
                    body: $data['body'],
                ));
        } catch (\Throwable $th) {
            return redirect()
                ->back()
                ->with([
                    'status' => 'Error',
                    'message' => 'An error occured: ' . $th->getMessage(),
                ]);
        }

        return redirect()
            ->back()
            ->with([
                'status' => 'OK',
                'message' => 'Mail sent successfully.',
            ]);
    }
}
