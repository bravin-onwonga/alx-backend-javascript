import { RowID, RowElement } from './interface';

import { insertRow, updateRow, deleteRow } from './crud';

export function insertRow(row: RowElement): RowID;
export function updateRow(rowId: RowID, row: RowElement): void;
export function deleteRow(rowId: RowID): RowID;
