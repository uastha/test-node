const okta = require('@okta/okta-sdk-nodejs');

const oktaClient = new okta.Client({
    orgUrl: 'https://dev-85117703.okta.com/',
    authorizationMode: 'PrivateKey',
    clientId: '0oab4pwlmf880qFhW5d7',
    scopes: ['okta.users.manage'],
    privateKey: {
        "d": "SPJBbigfxL7vuzPtigmwQtULtIDdyH9_lw7tJ8LHLdZckbYTHeQpd9k59v3B72qP7WlkhycutTOTVaaJxSkFpTuL7d0muNNWiRzTAcySZ1eh7ArXpcREKrqnIg62950K66C_X9w_76z5Y3On7fYrz0tzKoBmIhzxswK-4eZTptjdVrHVeIqrkKZDBAr0lp2nlhMhFMdtdMyULUU0TKyfKKTfrz3NrsYk6wtcuyJEbbNQPIHw5etXLSaAYeVd3BAucpAZ4_F0KvP2AIQJPhA64tmjqTUwUxj-CqdVrwjL3VbdycXrkiMws7i06Ij_c6QDKGZItUPEUAHjN48RpZnlyQ",
        "p": "9rjsTZyaJe_nwlQVEwCrXzCPN94JrSc3nM00JLvrGwo2VPqps7OI2Z3Yoqm1hnGPrDh5szcYdHnvo7Q74KGxvnjDsg3cUZG0SWBMazM4Z3aYYe_705fAX5WvrAce0cf0JyLY0NaIAOtnl42aBb4Lid3YopIqnY_aspkIMt9C38k",
        "q": "wA2we8ab6HMqSGEiGZ3dX4yHql_sSTj1BeliOrgq-1hlTcuqqYcpiRlhSlLDVxhN7CK0sQz7qQD7eYLOcvSx7MJTRZW7FdjxiPLZufJXvVuOybZ9byrPjeQEnptANK9pQqPRMPdLjBHEPQo1pTCBgjaY1UQVdjFsvEwd9R8sAnM",
        "dp": "qVsCibvnbAcjtRb2aFbbS7oPdS_qwHrdB7ssAdMkbSkzZl2xw3KHi6l4HSAVRLYLAxK5JzW4iatxvZNoTqdvVOmcm0o8Y5l6gauiiStdmlej_gY3fGT8XiBnt9QjaaixhXO8FI5OSSNNtpAym6J6VSZ9IArpScKHQnUdVZ4_T1E",
        "dq": "Y-Y7CQd0jeNp-SBdhomxX0RQRXWECUqRWbPensCxyvBeMathaLGgD2qeSvTmG2XPEqey6e3g8jZKmRhLn0xdSNSEUEvkdybT7PK2Ap1mul7n1VERykOwlxQmuwHy0fT0ge-InznjmEadl0q6QOUMWNlhgn3Z1BM9hmzpoFnIoLU",
        "qi": "EMP6eY5xXEhFwRmC991hJLemChSYN8YodnlwqxrXdTcFyI8_EDbdksh4o5DJOikhYxQC2EtK_R39hZ7kaFJI6u9kkx_5iowrx7G-RzWIZk6k6wQV-1X-sErdzTvMNttZD95joFpG3jRLP2UcDse3zecjiCT6Jk32Ucf0s7Mozzk",
        "kty": "RSA",
        "e": "AQAB",
        "kid": "VrInogLP63jtG5P5PEMMH57_fXlkKPyEkhnECLVU9sw",
        "n": "uRfitKIcvf3BO01huO_DTpOjOT1j0VRSvzpyCfrxzERkwuggWdS61R1e-DEhd8-Bm56Cc3n0fxu5EL6IlnwXJ-aZLUgY6tgskRQi7zXs-pqA6oOxAtlFIMA5Ds0mLXHI43x2zj7OrzcVf1Q1CvA5OVDlxMY3lDuRAp24nRcGZk8JIZ8xHY3nNbp8KIVjMqUDx5kGEkGHvtMrPjsBDMSHXAWl270Dq2EaYNcTZz036VxUDJCQf-1Aw956LJsgady38JhaHZDuzqQ5smd289n792QRK4yjXZd08pqZZ6UpyEt6wsVbOzuBmYeY_1OJGaahvjyzP0NCcOdInH2NnlYZSw"
    }
    , // <-- see notes below
    keyId: 'gNG0JqgWjSRWdTDNymTWuxNQHnFUlH2fbhRF67ySkzY'
});

// const oktaClient = new okta.Client({
//     orgUrl: 'https://dev-85117703.okta.com/',
//     token: '009X5dCqCU2zOEN9gY-9OisJYkSBl8hNo-urKtxrUA'
// });

module.exports = oktaClient;