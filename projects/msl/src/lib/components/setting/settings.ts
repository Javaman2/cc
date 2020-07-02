export class SettingGroup {
  id: number = 0;
  groupName: string;
  settings: Array<Setting>;
}
//** Support for a label and input pair, or a single label*/
export class Setting {
  id: number;
  //** In a grid represents the column headers, works with types and values */
  columns?: Array<string>;
  //** Not displayed just a placeholder */
  description?: string;
  //** What is shown in the label **//
  displayName: string;
  //** support for grid layout default false, when true labels don't appear */
  gridLayout?: boolean = false;
  groupID?: number = 0;
  groupName: string;
  settingOptions?: Array<string>;
  //** Along with showRemaining set to true, this is the number of chars to allow*/
  remainingChars?: number;
  //** Show the remaining number of character allowed   */
  showRemaining?: boolean = false;
  //** The size of the control **//
  size?: string;
  //** text, checkbox, select, multiselect, radio etc. */
  types: Array<string>;
  //** the current values of this control */
  values?: Array<string>;
}
