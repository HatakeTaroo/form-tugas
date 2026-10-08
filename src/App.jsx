import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    nim: "",
    email: "",
    course: "",
    assignment: "",
    notes: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.nim ||
      !form.email ||
      !form.course ||
      !form.assignment ||
      !form.file
    ) {
      alert("Please complete all required fields.");
      return;
    }

    setPreview(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({
      name: "",
      nim: "",
      email: "",
      course: "",
      assignment: "",
      notes: "",
      file: null,
    });

    setPreview(false);
    setSubmitted(false);
    document.getElementById("file").value = "";
  };

  return (
    <div className="page">
      <div className="card">

        <header>
          <div>
            <small>UNIVERSITY • ASSIGNMENT SYSTEM</small>
            <h1>Assignment Submission</h1>
            <p>Write your information and submit your assignment.</p>
          </div>

          <span>2026</span>
        </header>

        <div className="line" />

        <main>

          {/* FORM */}
          <section>
            <div className="title">
              <b>01</b>
              <div>
                <h2>Submission Form</h2>
                <small>Student information</small>
              </div>
            </div>

            <form onSubmit={handleSubmit}>

              <label>
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>

              <label>
                Student ID / NIM
                <input
                  name="nim"
                  value={form.nim}
                  onChange={handleChange}
                  placeholder="Your student ID"
                />
              </label>

              <label>
                Lecturer Gmail
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="lecturer@gmail.com"
                />
              </label>

              <label>
                Course
                <input
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  placeholder="Course name"
                />
              </label>

              <label>
                Assignment
                <input
                  name="assignment"
                  value={form.assignment}
                  onChange={handleChange}
                  placeholder="Assignment title"
                />
              </label>

              <label>
                Notes
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Additional notes (optional)"
                />
              </label>

              <label>
                File
                <div className="file">
                  {form.file
                    ? form.file.name
                    : "Choose assignment file"}

                  <input
                    id="file"
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                </div>
              </label>

              <button disabled={submitted}>
                {submitted
                  ? "SUBMITTED ✓"
                  : "SUBMIT ASSIGNMENT"}
              </button>

            </form>
          </section>


          {/* PAPER + DROP BOX */}
          <section>
            <div className="title">
              <b>02</b>
              <div>
                <h2>Submission Box</h2>
                <small>
                  Click the paper to preview
                </small>
              </div>
            </div>

            <div className={`scene ${submitted ? "sent" : ""}`}>

              {/* PAPER */}
              <div
                className={`paper ${preview ? "preview" : ""}`}
                onClick={() =>
                  !submitted && setPreview(!preview)
                }
              >
                <div className="paper-content">

                  <strong>ASSIGNMENT</strong>

                  <div className="paper-line" />

                  <p>
                    <small>FROM</small>
                    {form.name || "Student Name"}
                  </p>

                  <p>
                    <small>NIM</small>
                    {form.nim || "Student ID"}
                  </p>

                  <p>
                    <small>COURSE</small>
                    {form.course || "Course Name"}
                  </p>

                  <p>
                    <small>SUBJECT</small>
                    {form.assignment || "Assignment Title"}
                  </p>

                  <p>
                    <small>TO</small>
                    {form.email || "lecturer@gmail.com"}
                  </p>

                  {form.notes && (
                    <p className="paper-notes">
                      <small>NOTE</small>
                      {form.notes}
                    </p>
                  )}

                  {form.file && (
                    <p className="paper-file">
                      <small>ATTACHMENT</small>
                      📎 {form.file.name}
                    </p>
                  )}

                  <em>SUBMISSION</em>

                </div>
              </div>


              {/* DROP BOX */}
              <div className="dropbox">
                <div className="slot" />

                <div className="box-label">
                  <small>UNIVERSITY</small>
                  <strong>ASSIGNMENT</strong>
                  <span>DROP BOX</span>
                </div>

                <small className="office">
                  LECTURER'S OFFICE
                </small>
              </div>

            </div>


            {/* SUCCESS */}
            {submitted && (
              <>
                <div className="success">
                  <strong>✓ Assignment Submitted</strong>
                  <small>
                    Your assignment has been received.
                  </small>
                </div>

                <button
                  className="again"
                  onClick={resetForm}
                >
                  Submit another assignment
                </button>
              </>
            )}

          </section>

        </main>

        <footer>
          <span>ASSIGNMENT SUBMISSION</span>
          <span>UNIVERSITY • 2026</span>
        </footer>

      </div>
    </div>
  );
}

export default App;