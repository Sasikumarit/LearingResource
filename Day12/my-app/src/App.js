import "./App.css";
import loginiamge from "./download.png";

const App = () => {
  return (
    <div className="App">
      <h1>Sample Program</h1>

      <div>
        <a href="home.html">Home</a>

        <table id="Regitrationtable">
          <tr className="tablerow">
            ;
            <td>
              <img src={loginiamge} style={{ width: 50, height: 50 }} alt="regitrationimage"/>
            </td>
            <td>Registration</td>
          </tr>
          <tr className="tablerow">
            <td className="tablecolumn">Name</td>
            <td>
              <input type="text" id="name" className="ipcontrol" />
            </td>
          </tr>

          <tr className="tablerow">
            <td className="tablecolumn">Age</td>
            <td>
              <input type="number" id="age" className="ipcontrol" />
            </td>
          </tr>

          <tr className="tablerow">
            <td className="tablecolumn">DOB</td>
            <td>
              <input type="date" className="ipcontrol" />{" "}
            </td>
          </tr>

          <tr className="tablerow">
            <td className="tablecolumn">Gender</td>

            <td>
              <input type="radio" />
              <label>Male</label>
              <input type="radio" />
              <label>Female</label>
            </td>
          </tr>

          <tr className="tablerow">
            <td className="tablecolumn">Address</td>
            <td>
              <textarea className="ipcontrol"></textarea>
            </td>
          </tr>

          <tr className="tablerow">
            <td className="tablecolumn">City</td>

            <td>
              <select className="ipcontrol">
                <option> Mettupalyam</option>
                <option> Coimbatore</option>
              </select>
            </td>
          </tr>
          <tr className="tablerow">
            <td className="tablecolumn">State</td>

            <td>
              <select className="ipcontrol">
                <option> TN</option>
                <option> KN</option>
              </select>
            </td>
          </tr>
          <tr className="tablerow">
            <td className="tablecolumn">Pincode</td>
            <td>
              <input type="number" className="ipcontrol" />
            </td>
          </tr>

          <tr className="tablerow">
            <td className="tablecolumn">Attachment</td>
            <td>
              <input type="file" className="ipcontrol" />
            </td>
          </tr>
          <tr className="tablerow">
            <td>
              <input type="checkbox" /> I agree
            </td>
          </tr>

          <tr className="tablerow">
            <td>
              <button
                className="btnsubmit"
                onclick="alert(document.getElementById('name').value+ 'Record Saved Successfully......!')"
              >
                Submit
              </button>
            </td>
            <td>
              <button className="btnclear">Clear</button>
            </td>
            <td>
              <button className="btncancel">Cancel</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
