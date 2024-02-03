// TODO: write code here

// comment this to pass build

import { Form } from "../components/form/form";
import { Popover } from "../components/popover/popover";

const btnPopover = new Popover(".btn-popover");
const button = new Form(
  ".form",
  btnPopover.createPopover,
  btnPopover.removePopover
);
