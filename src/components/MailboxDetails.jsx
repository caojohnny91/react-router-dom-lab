import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      <h1>{selectedBox._id}</h1>
      <h2>Details</h2>

      <dl>
        <dt>Boxholder: {selectedBox.boxholder}</dt>
        <dt>Box Size: {selectedBox.boxSize}</dt>
      </dl>
    </>
  );
};

export default MailboxDetails;
