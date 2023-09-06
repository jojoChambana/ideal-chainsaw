import { Typography, Box } from "@mui/material";
import "@mui/material/styles";
import Link from "next/link";
import Layout from "./layout";

/**
 * Home Component
 *
 * This component is responsible for rendering the homepage of the application. It includes detailed instructions for
 * submitting gifts/non-gifts, information about different types of transmittals (Cash, Check, Gift in Kind, etc.),
 * and provides links to various transmittal forms and instructions.
 *
 * It's structured into several sections and utilizes Typography, Box, and Link components from MUI and Next.js to
 * display the content and navigate to other parts of the application.
 *
 * @example
 * <Home />
 *
 * @returns The rendered homepage, wrapped inside a Layout component, including detailed instructions, links to transmittal
 * forms, and general guidelines for different types of donations.
 */

export default function Home() {
  return (
    <Layout>
      <Box>
        <section>
          <Typography component="p">
            Gifts/non-gifts are to be submitted promptly once received in your
            department. The form should be mailed or hand-delivered (cash) to
            the address noted on the form. Forward any unsigned checks, address
            changes, deceased notices, or replies without checks, etc. to the
            GPSSO with a memo explaining the nature of the change or problem.
            The GPSSO will coordinate the appropriate changes in CRM.
          </Typography>

          <Typography component="p">
            If you have any questions when filling out your gift transmittal
            please contact Gift Administration at 217-333-0675.
          </Typography>
        </section>
        <section>
          <Typography variant="h4" component="h2" className="sectionHeaders">
            Cash, Check, Gift in kind
          </Typography>
          <Box component="ul" sx={{ pl: "2em" }}>
            <Box component="li">
              <Typography>
                Fill out a separate transmittal based on the type of gift
              </Typography>
            </Box>
            <Box component="li">
              <Typography>
                Include any and all documentation associated with the gift(s)
              </Typography>
            </Box>
            <Box component="li">
              <Typography>
                All transmittals are one donor per transmittal
              </Typography>
            </Box>
            <Box component="li">
              <Typography>
                Please do not print from this page. Fill out the form and click
                the &quote;Print Preview&quote; button.
              </Typography>
            </Box>
            <Box component="li">
              <Typography>Required fields are marked with an *</Typography>
            </Box>
          </Box>
          <Box component="ul" className="boldLinks">
            <Box component="li">
              <Link href="/cash" passHref>
                Cash Transmittal
              </Link>
            </Box>
            <Box component="li">
              <Link href="/check" passHref>
                Check Transmittal
              </Link>
            </Box>
            <Box component="li">
              <Link href="/giftinkind" passHref>
                Gift in Kind Transmittal
              </Link>
            </Box>
            <Box component="li">
              <Link
                href="https://app.sharebase.com/#/document/14467/share/375-LTTbeCrSrwC8PDZjyD7--ynG1A6E"
                target="_blank"
                rel="noreferrer"
              >
                Transmittal Instructions
              </Link>
            </Box>
          </Box>
        </section>

        <section>
          <Typography variant="h4" component="h2" className="sectionHeaders">
            Credit Card
          </Typography>
          <Box component="ul" sx={{ pl: "2em" }}>
            <Box component="li">
              <Typography>
                Encourage donors to enter their own credit card gift
                transactions or recurring credit card commitments through your
                departmental or university online giving site
              </Typography>
            </Box>
            <Box component="li">
              <Typography>
                Process all credit card gift transactions or recurring credit
                card commitments through your departmental or university online
                giving site
              </Typography>
            </Box>
            <Box component="li">
              <Typography>
                The credit card transmittal form is only to be used for a
                transaction that has a portion or is all non-gift/non-tax
                deductible
              </Typography>
            </Box>
            <Box component="li">
              <Typography>
                One donor and one fund/designation per transmittal
              </Typography>
            </Box>
            <Box component="li">
              <Typography>
                Please note: for security purposes, credit card information
                cannot be accepted via email or fax
              </Typography>
            </Box>
          </Box>

          <Box
            component="ul"
            sx={{ pl: "0em", listStyleType: "none" }}
            className="boldLinks"
          >
            <Box component="li">
              <Link
                href="https://portal.uif.uillinois.edu/creditcardtransmittal"
                target="_blank"
                rel="noreferrer"
              >
                Credit Card Transmittal
              </Link>
            </Box>
            <Box component="li">
              <Link
                href="https://online.uif.uillinois.edu/system/files/2019-05/CreditCardTransmittalInstructions.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Credit Card Transmittal Instructions
              </Link>
            </Box>
          </Box>
        </section>
        <section>
          <Typography variant="h4" component="h2" className="sectionHeaders">
            Securities and Wire (UIF Only)
          </Typography>
          <Box component="ul" sx={{ pl: "2em" }}>
            <Box component="li">
              <Typography>
                All security and wire transmittals are processed internally at
                UIF. If you have questions about security or wire gift types
                please contact the Director of Cash Receipts at 217-244-0352.
              </Typography>
            </Box>
          </Box>
          <Box
            component="ul"
            sx={{ pl: "0em", listStyleType: "none" }}
            className="boldLinks"
          >
            <Box component="li">
              <Link href="/Securities" passHref>
                Securities Transmittal
              </Link>
            </Box>
            <Box component="li">
              <Link href="/wire" passHref>
                Wire Transmittal
              </Link>
            </Box>
          </Box>
        </section>
      </Box>
    </Layout>
  );
}
