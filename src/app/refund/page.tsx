import React from 'react'

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-32">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                        Upon completing a Transaction, you are entering into a legally binding and enforceable agreement with us to purchase the product and/or service.
                    </p>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Cancellation Terms</h2>
                        <p>
                            After this point the User may cancel the Transaction unless it has been specifically provided for on the Platform. In which case, the cancellation will be subject to the terms mentioned on the Platform.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Refund Process</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Refund requests must be submitted within three days from the date of the Transaction</li>
                            <li>You can request a refund by raising a ticket or contacting us at: <a href="mailto:seller+2d5da20930e54932b1cb7ca9fdaa0232@instamojo.com" className="text-blue-600 hover:text-blue-800">seller+2d5da20930e54932b1cb7ca9fdaa0232@instamojo.com</a></li>
                            <li>Please provide a clear and specific reason for the refund request, including the exact terms that have been violated</li>
                            <li>Additional proof may be required for processing the refund</li>
                        </ul>
                    </div>

                    <p className="italic">
                        Note: We retain the discretion in approving any cancellation or refund requests and may ask for additional details before approving any requests.
                    </p>
                </div>
            </div>
        </div>
    )
}
