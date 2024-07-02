import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  boxSize: "",
  boxholder: "",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="Submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
