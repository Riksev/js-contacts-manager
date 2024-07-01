import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";
import { path as sitePath } from "./path";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect(`/${sitePath}/`);
}
