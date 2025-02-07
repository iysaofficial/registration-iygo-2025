import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Internationalaparticipants() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180; // batasan maksimal karakter
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const maxProjectChars = 160; // batasan maksimal karakter
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz-AtLbd9kAggIaFJ3Hxt0a-3YUT_CaDf_iyvyDaufl3t0oE03usehYMN7S0YQs8aLv1Q/exec";

    const form = document.forms["regist-form"];
    var buttonCounter = 0;

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (buttonCounter === 0) {
          buttonCounter++; // Cegah klik ganda
          setIsLoading(true); // Tampilkan loader
          try {
            const response = await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
            });
            if (response.ok) {
              setStatusMessage("Data berhasil dikirim!");
              form.reset(); // Reset form hanya jika pengiriman sukses
              setTimeout(() => {
                window.location.href = "/thankyouindopage"; // Redirect setelah 1 detik
              }, 1000);
            } else {
              setStatusMessage("Terjadi kesalahan saat mengirim data.");
            }
          } catch (error) {
            setStatusMessage("Terjadi kesalahan saat mengirim data.");
          } finally {
            setIsLoading(false); // Sembunyikan loader
            buttonCounter = 0; // Reset counter untuk klik selanjutnya
          }
        }
      };
      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <>
      <section className="registration-section">
        <div className="container">
          <div className="content">
            <div className="sub">REGISTRATION FORM</div>
            <h1 className="garis-bawah"></h1>
            <br />
            <br />
            <h4>
            HELLO IYGO 2025 PARTICIPANTS, Please consider the following information before filling out the registration form :
            </h4>
            <br />
            <p>
              1. Please fill in the required data correctly and ensure there are no writing errors. Also make sure that the data submitted is final and has not changed.
            </p>
            <p>
              2. After making sure the data is correct, you can click <span className="fw-bold">SUBMIT FORM</span> button once. If the data has been successfully submitted, you will be moved to another page.
            </p>
            <p>
              3. There will be an information email that the registration has been received sent to the team leaders email address, and the file will be validated by our team. Please be patient and wait for a maximum of 3 days after the registration time, the Letter of Acceptance (LOA) will be sent to the team leaders email address.
            </p>
            <br />

            <form name="regist-form">
              <h1>BIODATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label className="form-label" value="Peserta Indonesia">
                    Participant Categories 
                  </label>
                  <input
                    type="text"
                    id="PARTICIPANT_CATEGORY"
                    name="PARTICIPANT_CATEGORY"
                    className="form-control"
                    placeholder="Choose Categories Participant"
                    value="International Participant"
                    readOnly
                  />
                </div>
                <div className="input-box">
                  <label for="COMPETITION_CATEGORY" className="form-label">
                    Competition Category
                  </label>
                  <select
                    type="text"
                    id="COMPETITION_CATEGORY"
                    name="COMPETITION_CATEGORY"
                    className="form-control"
                    placeholder="Choose Category Competition "
                    required
                  >
                    <option value="">--Choose Competition Category--</option>
                    <option value="Online Competition">
                      Online Competition
                    </option>
                    <option value="Offline Competition">
                      Offline Competition
                    </option>
                  </select>
                </div>
              </div>

              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="FULL_NAME" className="form-label">
                    Name of Leader & Member Team
                  </label>
                  <label>
                    <p>
                    Noted: Input the name of the team leader and team members with the team leaders name at the beginning, with the following format:
                    </p>
                    <p>Note: maximum 1 members + 1 team leader</p>
                    <h6>Kamal Putra</h6>
                    <h6>Ranu Ramadhan</h6>
                  </label>
                  <textarea
                    type="text"
                    id="FULL_NAME"
                    name="FULL_NAME"
                    className="form-control"
                    placeholder="Input Name of Leader & Member Team"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                  ></textarea>
                  <p>
                    {selectedMaxNamaLengkap.length} / {maxNameChars} character
                  </p>
                </div>
                <div class="input-box">
                  <label for="PHONE_CODE" class="form-label">
                    Phone Code
                  </label>
                  <select
                    type="text"
                    id="PHONE_CODE"
                    name="PHONE_CODE"
                    class="form-control"
                    placeholder="Choose Phone Code "
                    required
                  >
                    <option value="">--Choose Phone Code--</option>
                    <option value="Indonesia +62">Indonesia +62</option>
                    <option value="Afganistan +93">Afganistan +93</option>
                    <option value="Afrika Selatan +27">
                      Afrika Selatan +27
                    </option>
                    <option value="Afrika Tengah +236">
                      Afrika Tengah +236
                    </option>
                    <option value="Albania +355">Albania +355</option>
                    <option value="Algeria +213">Algeria +213</option>
                    <option value="Amerika Serikat +1">
                      Amerika Serikat +1
                    </option>
                    <option value="Arab Saudi +966">Arab Saudi +966</option>
                    <option value="Australia +61">Australia +61</option>
                    <option value="Azerbaijan +994">Azerbaijan +994</option>
                    <option value="Austria +43">Austria +43</option>
                    <option value="Bangladesh +880">Bangladesh +880</option>
                    <option value="Belanda +31">Belanda +31</option>
                    <option value="Belarus +375">Belarus +375</option>
                    <option value="Bolivia +591">Bolivia +591</option>
                    <option value="Brasil +55">Brasil +55</option>
                    <option value="Brunei Darussalam +673">
                      Brunei Darussalam +673
                    </option>
                    <option value="China +86">China +86</option>
                    <option value="Filipina +63">Filipina +63</option>
                    <option value="Finlandia +358">Finlandia +358</option>
                    <option value="Hongaria +36">Hongaria +36</option>
                    <option value="Hongkong +852">Hongkong +852</option>
                    <option value="India +91">India +91</option>
                    <option value="Irak +964">Irak +964</option>
                    <option value="Iran +98">Iran +98</option>
                    <option value="Irlandia +353">Irlandia +353</option>
                    <option value="Jepang +81">Jepang +81</option>
                    <option value="Kamboja +855">Kamboja +855</option>
                    <option value="Kazakhstan +7">Kazakhstan +7</option>
                    <option value="Korea Selatan +82">Korea Selatan +82</option>
                    <option value="Republik Kongo +243">
                      Republik Kongo +243
                    </option>
                    <option value="Kosta Rika +506">Kosta Rika +506</option>
                    <option value="Lebanon +961">Lebanon +961</option>
                    <option value="Malaysia +60">Malaysia +60</option>
                    <option value="Maroko +212">Maroko +212</option>
                    <option value="Mexico +52">Mexico +52</option>
                    <option value="Myanmar +95">Myanmar +95</option>
                    <option value="Nepal +977">Nepal +977</option>
                    <option value="Pakistan +92">Pakistan +92</option>
                    <option value="Rumania +40">Rumania +40</option>
                    <option value="Singapura +65">Singapura +65</option>
                    <option value="Slovenia +386">Slovenia +386</option>
                    <option value="Taiwan +886">Taiwan +886</option>
                    <option value="Thailand +66">Thailand +66</option>
                    <option value="Turki +90">Turki +90</option>
                    <option value="Turkmenistan +993">Turkmenistan +993</option>
                    <option value="Uni Emirat Arab +971">
                      Uni Emirat Arab +971
                    </option>
                    <option value="Uzbekistan +998">Uzbekistan +998</option>
                    <option value="Vietnam +84">Vietnam +84</option>
                    <option value="Zimbabwe +263">Zimbabwe +263</option>
                  </select>
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_WHATSAPP" className="form-label">
                    Leader WhatsApp Number
                  </label>
                  <label>
                    <p>
                    Please write with phone code, example : (phone code) (your number) +62 8177091xxxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="form-control"
                    placeholder="Input Leader WhatsApp Number"
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="LEADER_EMAIL" className="form-label">
                    Leader Email Address
                  </label>
                  <label>
                    <p>
                    Notes: Please fill in the email correctly, LOA submissions will be sent via the team leaders email address filled in.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    className="form-control"
                    placeholder="Input Your Leader Email Address"
                    required
                  />
                </div>
              </div>

              {/* DATA SEKOLAH START */}
              {/* DATA SEKOLAH START */}
              <h1>SCHOOL DATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="SCHOOL_NAME" className="form-label">
                    Name of School/University
                  </label>
                  <label>
                    <p>
                    Noted: if all members are in the same institution, write only 1 institution.
                    </p>
                    <p>If the members are not in the same institution, enter the name of the school with the format in the order of the name of the team leader and team members from each school, with the following format:</p>
                    <h6>SMA CERIA</h6>
                    <h6>HAPPY SENIOR HIGH SCHOOL</h6>
                  </label>
                  <textarea
                    type="text"
                    id="SCHOOL_NAME"
                    name="SCHOOL_NAME"
                    className="form-control"
                    placeholder="Input School Name of Leader & Member Team"
                    required
                  ></textarea>
                </div>  
                <div></div>
                <div className="input-box">
                  <label for="GRADE" className="form-label">
                    Grade{" "}
                  </label>
                  <select
                    type="text"
                    id="GRADE"
                    name="GRADE"
                    className="form-control"
                    placeholder="Pilih Jenjang Pendidikan"
                    required
                  >
                    <option value="">--Choose Your Grade--</option>
                    <option value="Senior High School">
                      Senior High School
                    </option>
                    <option value="University">
                    University
                    </option>
                  </select>
                </div>
                <div className="input-box">
                  <label for="COUNTRY" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    id="COUNTRY"
                    name="COUNTRY"
                    className="form-control"
                    placeholder="Input Your Country"
                    required
                  />
                </div>
              </div>
              {/* DATA SEKOLAH END */}
              {/* DATA SEKOLAH END */}

              {/* DATA PEMBIMBING START */}
              {/* DATA PEMBIMBING START */}
              <h1>SUPERVISOR DATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label for="SUPERVISOR_NAME" className="form-label">
                    Name of Teacher/Supervisor
                  </label>
                  <textarea
                    type="text"
                    id="SUPERVISOR_NAME"
                    name="SUPERVISOR_NAME"
                    className="form-control"
                    placeholder="Input Name of Teacher/Supervisor"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label
                    for="SUPERVISOR_WHATSAPP_NUMBER"
                    className="form-label"
                  >
                    Teacher/Supervisor WhatsApp Number
                  </label>
                  <label>
                    <p>
                    Please write with phone code, example : (phone code) (your number) +62 8177091xxxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="SUPERVISOR_WHATSAPP_NUMBER"
                    name="SUPERVISOR_WHATSAPP_NUMBER"
                    className="form-control"
                    placeholder="Input Teacher/Supervisor WhatsApp Number"
                    required
                  />
                </div>

                <div className="input-box">
                  <label for="SUPERVISOR_EMAIL" className="form-label">
                    Teacher/Supervisor Email Address
                  </label>
                  <input
                    type="email"
                    id="SUPERVISOR_EMAIL"
                    name="SUPERVISOR_EMAIL"
                    className="form-control"
                    placeholder="Input Teacher/Supervisor Email Address"
                    required
                  />
                </div>
              </div>
              {/* DATA PEMBIMBING END */}
              {/* DATA PEMBIMBING END */}


              {/* GENERAL INFORMATION START */}
              {/* GENERAL INFORMATION START */}
              <div className="">
                <h1>GENERAL INFORMATION</h1>
                <h1 className="garis-bawah"></h1>
              </div>
              <div className="user-details">
              <div class="input-box">
                  <label for="SOSMED" class="form-label">
                    If you don&apos;t have whatsapp number, please write down
                    your social media account. (Ex: Instagram/FB/Telegram/Line)
                  </label>
                  <label>
                    <p>
                      Copy your URL link(Ex:
                      https://www.instagram.com/iicyms_official/) or write your
                      username (Ex: iysa_official)
                    </p>
                  </label>
                  <input
                    type="text"
                    id="SOSMED"
                    name="SOSMED"
                    class="form-control"
                    placeholder="Input Your Social Media Account "
                    required
                  />
                </div>
                <div className="input-box">
                  <label for="INFORMATION_RESOURCES" className="form-label">
                    IYGO 2025 Competition Information Resources
                  </label>
                  <select
                    type="text"
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="form-control"
                    placeholder="--Choose Information Resources-- "
                    required
                  >
                    <option value="">--Select the Source of Information--</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="IYGO Instagram">IYGO Instagram</option>
                    <option value="Supervisor/School">
                      Supervisor/School
                    </option>
                    <option value="IYSA FaceBook">IYSA FaceBook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="IYGO Website">IYGO Website</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="IYGO Email">IYGO Email</option>
                    <option value="Previous Event">Previous Event</option>
                    <option value="Etc">Etc</option>
                  </select>
                </div>
              </div>
              {/* GENERAL INFORMATION END */}
              {/* GENERAL INFORMATION END */}

              <div className="button">
                <input type="submit" value="Submit Form" />
              </div>
            </form>

            {/* Loader dan Status Message */}
            {isLoading && (
              <div className="overlay-loader">
                <div className="loader"></div>
                <div>
                  {statusMessage && (
                    <p className="status-message">{statusMessage}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
