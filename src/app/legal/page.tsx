import React from 'react'

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white mt-32">
            <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

            <div className="prose prose-slate max-w-none space-y-6">
                {/* Introduction */}
                <section>
                    <p className="mb-4">
                        By accessing this webpage, you are agreeing to be bound by these Terms and Conditions (&ldquo;Terms&quot;) in a legally binding agreement between us (&ldquo;Merchant&rdquo; or &ldquo;us&rdquo; or &ldquo;we&rdquo; or &ldquo;our&rdquo;) and the User (&ldquo;you&rdquo; or &ldquo;your&rdquo;).
                    </p>
                    <p>
                        Please read these Terms carefully before accessing or using the Website. If you do not agree to the Terms, you may not access the Platform.
                    </p>
                </section>

                {/* Definitions */}
                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Definitions</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Payment Instrument:</strong> Includes credit card, debit card, bank account, prepaid payment instrument, UPI, IMPS, or any other payment methods.</li>
                        <li><strong>Platform:</strong> Refers to the website where the Merchant offers its products or services.</li>
                        <li><strong>Transaction:</strong> Order or request placed by the User with the Merchant.</li>
                        <li><strong>Transaction Amount:</strong> Amount paid by the User for a Transaction.</li>
                        <li><strong>User/Users:</strong> Any person availing the products and/or services on the Platform.</li>
                    </ul>
                </section>

                {/* Merchant's Rights */}
                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Merchant&apos;s Rights</h2>
                    <p>
                        You agree that we may collect, store, and share the information provided by you in order to deliver the products and/or services availed by you on our Platform.
                    </p>
                </section>

                {/* User Responsibilities */}
                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Your Responsibilities</h2>
                    <p>
                        You agree to provide us with true, complete and up-to-date information about yourself as may be required for completing Transactions.
                    </p>
                </section>

                {/* Prohibited Actions */}
                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 ">Prohibited Actions</h2>
                    <div className="bg-red-100 p-6 rounded-lg">
                        <ul className="list-disc pl-6 space-y-2 text-black">
                            <li>Systematically retrieve data without permission</li>
                            <li>Make unauthorized use of the Platform</li>
                            <li>Circumvent security features</li>
                            <li>Engage in automated use of the system</li>
                            <li>Interfere with Platform operations</li>
                            <li>Attempt to impersonate other users</li>
                        </ul>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        For any questions or complaints regarding our services, please contact our support team.
                    </p>
                </footer>

            </div>
        </div>
    )
}