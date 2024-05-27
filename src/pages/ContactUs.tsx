import { useState } from "react";
import { codes } from "../utilities/mobilecodes"
import { objectToFormData } from "../utilities/objectToFormData";
import axios from "axios";
import { toast } from "sonner";
const ContactUs = () => {
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
        // mobile_no: "",
        // country_code: "",
        organisation: ""
    })
    const [loading, setLoading] = useState(false)
    const validations = () => {
        function validateEmail(email: string) {
            // Regular expression for email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
        if (!contactUsData.name.trim()) {
            setErrors(prev => ({ ...prev, name: "Please enter your name" }))
            return false;
        } else setErrors(prev => ({ ...prev, name: "" }))
        if (!contactUsData.email.trim()) {
            setErrors(prev => ({ ...prev, email: "Please enter your email" }))
            return false;
        } else if (!validateEmail(contactUsData.email)) {
            setErrors(prev => ({ ...prev, email: "Please enter a valid email" }))
            return false;
        }
        else setErrors(prev => ({ ...prev, email: "" }))
        if (!contactUsData.organisation.trim()) {
            setErrors(prev => ({ ...prev, organisation: "Please enter your organisation" }))
        }
        else setErrors(prev => ({ ...prev, organisation: "" }))
        // if (!contactUsData.mobile_no.trim()) {
        //   setErrors(prev => ({ ...prev, mobile_no: "Please enter country code and mobile no" }))
        //   return false;
        // } else if(contactUsData.mobile_no.trim().length!==10 || isNaN(contactUsData.mobile_no)) {
        //   setErrors(prev => ({ ...prev, mobile_no: "Please enter a valid mobile_no" }))
        //   return false;
        // }
        // else setErrors(prev => ({ ...prev, mobile_no: "" }))
        if (!contactUsData.message.trim()) {
            setErrors(prev => ({ ...prev, message: "Please enter a message" }))
            return false;
        } else setErrors(prev => ({ ...prev, message: "" }))

        return true;
    }
    const [contactUsData, setContactUsData] = useState({
        name: "",
        email: "",
        organisation: "",
        country_code: "",
        mobile_no: "",
        country: "",
        industry: "",
        message: ""
    })
    const handleChange = (e) => {
        setContactUsData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const sendEmail = () => new Promise(async (resolve, reject) => {
        setLoading(true)
        const formData = objectToFormData(contactUsData);
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/contact_us`, formData)

            if (res.status === 200) {
                setContactUsData(prev => ({
                    name: "",
                    email: "",
                    organisation: "",
                    country_code: "",
                    mobile_no: "",
                    country: "",
                    industry: "",
                    message: ""
                }))
                resolve(res.data.message)
            }
        } catch (error) {
            reject(error?.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    })
    const handleSubmit = () => {
        if (validations()) {
            toast.promise(sendEmail(), {
                loading: 'Loading...',
                success: (message) => {
                    return message;
                },
                error: (error) => {
                    return error;
                },
            })
        }
    }
    return (
        <div className="min-h-[60vh] mb-8">
            <div className="bg-[#526D82] bg-opacity-40 backdrop-blur-md min-h-96 container rounded-lg p-8 mt-32">
                <div className="relative">
                    <h1 className="text-center text-white font-bold text-3xl">Contact Us</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                        <input type="text" name="name" value={contactUsData.name} onChange={handleChange} placeholder="Name" required className="p-4 w-full rounded-lg outline-none focus:outline-[#D2E9E9] placeholder:text-black" />
                        <p className="text-sm text-red-400 font-bold">{errors.name}</p>
                    </div>
                    <div>
                        <input type="text" name="email" value={contactUsData.email} onChange={handleChange} placeholder="Email" required className="p-4 w-full rounded-lg outline-none focus:outline-[#D2E9E9] placeholder:text-black" />
                        <p className="text-sm text-red-400 font-bold">{errors.email}</p>
                    </div>
                    <div>
                        <input type="text" name="organisation" value={contactUsData.organisation} onChange={handleChange} placeholder="Organisation" className="p-4 w-full rounded-lg outline-none focus:outline-[#D2E9E9] placeholder:text-black" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                        <select name="country_code" id="country_code" value={contactUsData.country_code} onChange={handleChange} required className="p-4 rounded-lg outline-none focus:outline-[#D2E9E9] placeholder:text-black" autoComplete="on">
                            <option value="" disabled selected>Code</option>
                            {codes.map((code, index) => {
                                return (
                                    <option key={index} value={code.dial_code}>{code.dial_code} {code.flag}</option>
                                )
                            })}
                        </select>
                        <input type="text" placeholder="Mobile" value={contactUsData.mobile_no} maxLength={10} required onChange={handleChange} name="mobile_no" className="p-4 w-full rounded-lg outline-none focus:outline-[#D2E9E9] placeholder:text-black" />
                    </div>
                    <div>
                        <select id="country" name="country" value={contactUsData.country} onChange={handleChange} className="p-4 w-full rounded-lg outline-none focus:outline-[#D2E9E9] placeholder:text-black" autoComplete="on">
                            <option value="" disabled selected>Select Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" value={contactUsData.industry} name="industry" onChange={handleChange} placeholder="Industry" className="p-4 w-full rounded-lg outline-none focus:outline-[#D2E9E9] placeholder:text-black" />
                    </div>
                    <div className="md:col-span-2">
                        <textarea value={contactUsData.message} placeholder="How can we help you?" required onChange={handleChange} name="message" className="p-4 w-full rounded-lg outline-none  focus:outline-[#D2E9E9] placeholder:text-black" draggable={false} rows={2} style={{ resize: "none" }} />
                        <p className="text-sm text-red-400 font-bold">{errors.message}</p>
                    </div>
                </div>
                <button disabled={loading} className="rounded-lg bg-red-400 px-12 py-4 text-white text-xl mt-4" onClick={handleSubmit}>
                    Submit
                </button>

            </div>
        </div>
    )
}

export default ContactUs
