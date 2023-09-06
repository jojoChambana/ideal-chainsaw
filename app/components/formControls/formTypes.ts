/**
 * FormData defines the structure of the form data used throughout the application.
 * It includes fields for various donor details, campus information, and processing dates.
 * This interface serves as a contract for the expected data format and is used by various form-related components.
 *
 * @property campus - The selected campus for hand-delivering the transmittal and cash (e.g., "UIUC", "UIC", "UIS").
 * @property donorName - The full name of the donor or contact person.
 * @property donorPhone - The phone number of the donor or contact person.
 * @property donorEmail - The email address of the donor or contact person.
 * @property collegeName - The name of the college associated with the donation.
 * @property dateReceived - The date the donation was received, in "YYYY-MM-DD" format.
 * @property preparedBy - The name of the person who prepared the donation form.
 * @property dateProcessed - The date the donation was processed, in "YYYY-MM-DD" format.
 * @property deptName - The name of the department associated with the donation.
 */
export interface FormData {
  campus: string;
  donorName: string;
  donorPhone: string;
  donorEmail: string;
  collegeName: string;
  dateReceived: string;
  preparedBy: string;
  dateProcessed: string;
  deptName: string;
}
