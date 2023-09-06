import { Typography } from "@mui/material";

/**
 * InstructionsCashCheckGIK is a React functional component that renders instructions for handling Cash, Check, and Gift In Kind donations.
 * It includes specific guidance on submitting gifts, delivering supporting documentation, forwarding notices, and provides contact information for assistance.
 *
 * @example
 * <InstructionsCashCheckGIK />
 *
 * @returns {JSX.Element} The rendered InstructionsCashCheckGIK component containing the text-based instructions for handling Cash, Check, and Gift In Kind donations.
 */
const InstructionsCashCheckGIK = () => {
  return (
    <>
      <section>
        <Typography component="p">
          Gifts are to be submitted promptly once received by your department.
        </Typography>

        <Typography component="p">
          The form, cash and all other supporting documentation, should be
          hand-delivered to the Gift Processing and Stewardship Services Office
          (GPSSO) noted below.
        </Typography>

        <Typography component="p">
          Forward any unsigned checks, address changes, deceased notices,
          replies without checks, etc. to the GPSSO with a memo explaining the
          nature of the change or problem. The GPSSO will coordinate the
          appropriate changes in CRM.
        </Typography>

        <Typography component="p">
          Instructions on how to complete this form. If you have any questions
          when filling out your gift transmittal, contact Gift Administration at
          217-333-0675.
        </Typography>
      </section>
    </>
  );
};

export default InstructionsCashCheckGIK;
