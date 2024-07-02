import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox {mailbox._id} ({mailbox.boxholder})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
