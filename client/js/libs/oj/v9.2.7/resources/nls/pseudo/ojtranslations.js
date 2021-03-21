define({"oj-message":{fatal:"$$$[PX$$$]$$$[Fatal é$$$]",error:"$$$[PX$$$]$$$[Error é$$$]",warning:"$$$[PX$$$]$$$[Warning é$$$]",info:"$$$[PX$$$]$$$[Info é$$$]",confirmation:"$$$[PX$$$]$$$[Confirmation é$$$]","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"$$$[PX$$$]$$$[Value is not in the expected format. é$$$]",detail:"$$$[PX$$$]$$$[Enter a value in the expected format. éë$$$]","plural-separator":", ",hint:{summary:"$[PX$]$[Example: {exampleValue} é$]",detail:"$[PX$]$[Enter a value in this format: '{exampleValue}'. éëžéë$]","detail-plural":"$[PX$]$[Enter a value in these formats: '{exampleValue}'. éëžéë$]"},optionHint:{detail:"$[PX$]$[An accepted value for option '{propertyName}' is '{propertyValueValid}'. éëžéëžéëžéëž$]","detail-plural":"$[PX$]$[Accepted values for option '{propertyName}' are '{propertyValueValid}'. éëžéëžéëžéëž$]"},optionTypesMismatch:{summary:"$[PX$]$[A value for the option '{requiredPropertyName}' is required when the option '{propertyName}' is set to '{propertyValue}'. éëžéëžéëžéëžéëžéëžéëžéëžéëž$]"},optionTypeInvalid:{summary:"$[PX$]$[A value of the expected type was not provided for option '{propertyName}'. éëžéëžéëžéëžé$]"},optionOutOfRange:{summary:"$[PX$]$[Value {propertyValue} is out of range for the option '{propertyName}'. éëžéëžéëžéëž$]"},optionValueInvalid:{summary:"$[PX$]$[An invalid value '{propertyValue}' was specified for the option '{propertyName}'. éëžéëžéëžéëžéëž$]"},number:{decimalFormatMismatch:{summary:"$$$[PX$$$]$$$[The provided value is not in the expected number format. éëžéëžé$$$]"},shortLongUnsupportedParse:{summary:"$$$[PX$$$]$$$['short' and 'long' are not supported for converter parsing. éëžéëžéë$$$]",detail:"$$$[PX$$$]$$$[Change component to readonly. readonly fields do not call the converter's parse function. éëžéëžéëžéëžéëžéë$$$]"},currencyFormatMismatch:{summary:"$$$[PX$$$]$$$[The provided value is not in the expected currency format. éëžéëžéë$$$]"},percentFormatMismatch:{summary:"$$$[PX$$$]$$$[The provided value is not in the expected percent format. éëžéëžéë$$$]"},invalidNumberFormat:{summary:"$$$[PX$$$]$$$[The provided value is not a valid number. éëž$$$]",detail:"$$$[PX$$$]$$$[Please provide valid number. é$$$]"}},color:{invalidFormat:{summary:"$$$[PX$$$]$$$[Invalid color format. é$$$]",detail:"$$$[PX$$$]$$$[Invalid color format option specification. éëž$$$]"},invalidSyntax:{summary:"$$$[PX$$$]$$$[Invalid color specification. é$$$]",detail:"$$$[PX$$$]$$$[Enter a color value that conforms to the CSS3 standard. éëžéëžé$$$]"}},datetime:{datetimeOutOfRange:{summary:"$[PX$]$[Value '{value}' is out of range for the '{propertyName}'. éëžéëžéë$]",detail:"$[PX$]$[Enter a value between '{minValue}' and '{maxValue}'. éëžéëž$]",hour:"$$$[PX$$$]$$$[hour é$$$]",minute:"$$$[PX$$$]$$$[minute é$$$]",second:"$$$[PX$$$]$$$[second é$$$]",millisec:"$$$[PX$$$]$$$[millisec é$$$]",month:"$$$[PX$$$]$$$[month é$$$]",day:"$$$[PX$$$]$$$[day é$$$]",year:"$$$[PX$$$]$$$[year é$$$]","month name":"$$$[PX$$$]$$$[month name é$$$]",weekday:"$$$[PX$$$]$$$[weekday é$$$]"},dateFormatMismatch:{summary:"$$$[PX$$$]$$$[The provided value is not in the expected date format. éëžéëžé$$$]"},invalidTimeZoneID:{summary:"$[PX$]$[Invalid timezone id {timeZoneID} provided. éëž$]"},nonExistingTime:{summary:"$$$[PX$$$]$$$[The input time does not exist because it falls during the transition to daylight saving time. éëžéëžéëžéëžéëžéëž$$$]"},missingTimeZoneData:{summary:"$$$[PX$$$]$$$[TimeZone data is missing. Please call require 'ojs/ojtimezonedata' in order to load the TimeZone data. éëžéëžéëžéëžéëžéëžéëž$$$]"},timeFormatMismatch:{summary:"$$$[PX$$$]$$$[The provided value is not in the expected time format. éëžéëžé$$$]"},datetimeFormatMismatch:{summary:"$$$[PX$$$]$$$[The provided value is not in the expected date and time format. éëžéëžéëž$$$]"},dateToWeekdayMismatch:{summary:"$[PX$]$[Day '{date}' does not fall on a '{weekday}'. éëžé$]",detail:"$$$[PX$$$]$$$[Enter a weekday that corresponds with the date. éëžéë$$$]"},invalidISOString:{invalidRangeSummary:"$[PX$]$[The value '{value}' is out of range for the '{propertyName}' field in the ISO 8601 string '{isoStr}'. éëžéëžéëžéëžéëžéëžéëž$]",summary:"$[PX$]$[The provided '{isoStr}' is not a valid ISO 8601 string. éëžéëžé$]",detail:"$$$[PX$$$]$$$[Please provide valid ISO 8601 string. éë$$$]"}}},"oj-validator":{length:{hint:{min:"$[PX$]$[Enter {min} or more characters. é$]",max:"$[PX$]$[Enter {max} or fewer characters. é$]",inRange:"$[PX$]$[Enter {min} to {max} characters. é$]",exact:"$[PX$]$[Enter {length} characters. é$]"},messageDetail:{tooShort:"$[PX$]$[Enter {min} or more characters. é$]",tooLong:"$[PX$]$[Enter no more than {max} characters. é$]"},messageSummary:{tooShort:"$$$[PX$$$]$$$[There are too few characters. é$$$]",tooLong:"$$$[PX$$$]$$$[There are too many characters. é$$$]"}},range:{number:{hint:{min:"$[PX$]$[Enter a number greater than or equal to {min}. éëžé$]",max:"$[PX$]$[Enter a number less than or equal to {max}. éëž$]",inRange:"$[PX$]$[Enter a number between {min} and {max}. éë$]",exact:"$[PX$]$[Enter the number {num}. é$]"},messageDetail:{rangeUnderflow:"$[PX$]$[Enter {min} or a higher number. é$]",rangeOverflow:"$[PX$]$[Enter {max} or a lower number. é$]",exact:"$[PX$]$[Enter the number {num}. é$]"},messageSummary:{rangeUnderflow:"$$$[PX$$$]$$$[The number is too low. é$$$]",rangeOverflow:"$$$[PX$$$]$$$[The number is too high. é$$$]"}},datetime:{hint:{min:"$[PX$]$[Enter a date and time on or after {min}. éëž$]",max:"$[PX$]$[Enter a date and time on or before {max}. éëž$]",inRange:"$[PX$]$[Enter a date and time between {min} and {max}. éëžé$]"},messageDetail:{rangeUnderflow:"$[PX$]$[Enter a date on or after {min}. é$]",rangeOverflow:"$[PX$]$[Enter a date on or before {max}. é$]"},messageSummary:{rangeUnderflow:"$$$[PX$$$]$$$[Date and time is earlier than the minimum date and time. éëžéëžé$$$]",rangeOverflow:"$$$[PX$$$]$$$[Date and time is later than the maximum date and time. éëžéëžé$$$]"}},date:{hint:{min:"$[PX$]$[Enter a date on or after {min}. é$]",max:"$[PX$]$[Enter a date on or before {max}. é$]",inRange:"$[PX$]$[Enter a date between {min} and {max}. éë$]"},messageDetail:{rangeUnderflow:"$[PX$]$[Enter a date on or after {min}. é$]",rangeOverflow:"$[PX$]$[Enter a date on or before {max}. é$]"},messageSummary:{rangeUnderflow:"$$$[PX$$$]$$$[Date is earlier than the minimum date. éë$$$]",rangeOverflow:"$$$[PX$$$]$$$[Date is later than the maximum date. é$$$]"}},time:{hint:{min:"$[PX$]$[Enter a time on or after {min}. é$]",max:"$[PX$]$[Enter a time on or before {max}. é$]",inRange:"$[PX$]$[Enter a time between {min} and {max}. éë$]"},messageDetail:{rangeUnderflow:"$[PX$]$[Enter a time at or after {min}. é$]",rangeOverflow:"$[PX$]$[Enter a time at or before {max}. é$]"},messageSummary:{rangeUnderflow:"$$$[PX$$$]$$$[Time is earlier than the minimum time. éë$$$]",rangeOverflow:"$$$[PX$$$]$$$[Time is later than the maximum time. é$$$]"}}},restriction:{date:{messageSummary:"$[PX$]$[Date {value} is of a disabled entry. é$]",messageDetail:"$$$[PX$$$]$$$[The date you selected isn't available. Try another date. éëžéëžé$$$]"}},regExp:{summary:"$$$[PX$$$]$$$[Format is incorrect. é$$$]",detail:"$[PX$]$[Enter allowable values described in this regular expression: '{pattern}'. éëžéëžéëžéëž$]"},required:{summary:"$$$[PX$$$]$$$[Value is required. é$$$]",detail:"$$$[PX$$$]$$$[Enter a value. é$$$]"}},"oj-ojEditableValue":{loading:"$$$[PX$$$]$$$[Loading é$$$]",requiredText:"$$$[PX$$$]$$$[Required é$$$]",helpSourceText:"$$$[PX$$$]$$$[Learn more... é$$$]"},"oj-ojInputDate":{done:"$$$[PX$$$]$$$[Done é$$$]",cancel:"$$$[PX$$$]$$$[Cancel é$$$]",prevText:"$$$[PX$$$]$$$[Previous é$$$]",nextText:"$$$[PX$$$]$$$[Next é$$$]",currentText:"$$$[PX$$$]$$$[Today é$$$]",weekHeader:"$$$[PX$$$]$$$[Wk é$$$]",tooltipCalendar:"$$$[PX$$$]$$$[Select Date. é$$$]",tooltipCalendarTime:"$$$[PX$$$]$$$[Select Date Time. é$$$]",tooltipCalendarDisabled:"$$$[PX$$$]$$$[Select Date Disabled. é$$$]",tooltipCalendarTimeDisabled:"$$$[PX$$$]$$$[Select Date Time Disabled. é$$$]",picker:"$$$[PX$$$]$$$[Picker é$$$]",weekText:"$$$[PX$$$]$$$[Week é$$$]",datePicker:"$$$[PX$$$]$$$[Date Picker é$$$]",inputHelp:"$$$[PX$$$]$$$[Press Key down or Key up for access to Calendar. éëžéë$$$]",inputHelpBoth:"$$$[PX$$$]$$$[Press Key down or Key up for access to Calendar and Shift + Key down or Shift Key up for access to time drop down. éëžéëžéëžéëžéëžéëžéëžéëžé$$$]",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"$$$[PX$$$]$$$[Cancel é$$$]",okText:"$$$[PX$$$]$$$[OK é$$$]",currentTimeText:"$$$[PX$$$]$$$[Now é$$$]",hourWheelLabel:"$$$[PX$$$]$$$[Hour é$$$]",minuteWheelLabel:"$$$[PX$$$]$$$[Minute é$$$]",ampmWheelLabel:"$$$[PX$$$]$$$[AMPM é$$$]",tooltipTime:"$$$[PX$$$]$$$[Select Time. é$$$]",tooltipTimeDisabled:"$$$[PX$$$]$$$[Select Time Disabled. é$$$]",inputHelp:"$$$[PX$$$]$$$[Press Key down or Key up for access to time drop down. éëžéëžé$$$]",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"$[PX$]$[Maximum length {len} exceeded. é$]",accessibleMaxLengthRemaining:"$[PX$]$[{chars} characters left. é$]"},"oj-ojInputPassword":{regexp:{messageDetail:"$[PX$]$[Value must match this pattern: '{pattern}'. éëž$]"}},"oj-ojFilmStrip":{labelAccFilmStrip:"$[PX$]$[Displaying page {pageIndex} of {pageCount} éëž$]",labelAccArrowNextPage:"$$$[PX$$$]$$$[Select Next to display next page é$$$]",labelAccArrowPreviousPage:"$$$[PX$$$]$$$[Select Previous to display previous page éëž$$$]",tipArrowNextPage:"$$$[PX$$$]$$$[Next é$$$]",tipArrowPreviousPage:"$$$[PX$$$]$$$[Previous é$$$]"},"oj-ojDataGrid":{accessibleSortAscending:"$[PX$]$[{id} sorted in ascending order é$]",accessibleSortDescending:"$[PX$]$[{id} sorted in descending order é$]",accessibleActionableMode:"$$$[PX$$$]$$$[Enter actionable mode. é$$$]",accessibleNavigationMode:"$$$[PX$$$]$$$[Enter navigation mode, press F2 to enter edit or actionable mode. éëžéëžéëžé$$$]",accessibleEditableMode:"$$$[PX$$$]$$$[Enter editable mode, press escape to navigate outside the data grid. éëžéëžéëžéë$$$]",accessibleSummaryExact:"$[PX$]$[This is a data grid with {rownum} rows and {colnum} columns éëžéëžéë$]",accessibleSummaryEstimate:"$$$[PX$$$]$$$[This is a data grid with unknown number of rows and columns éëžéëžéë$$$]",accessibleSummaryExpanded:"$[PX$]$[There are currently {num} rows expanded éë$]",accessibleRowExpanded:"$$$[PX$$$]$$$[Row expanded é$$$]",accessibleRowCollapsed:"$$$[PX$$$]$$$[Row collapsed é$$$]",accessibleRowSelected:"$[PX$]$[Row {row} selected é$]",accessibleColumnSelected:"$[PX$]$[Column {column} selected é$]",accessibleStateSelected:"$$$[PX$$$]$$$[selected é$$$]",accessibleMultiCellSelected:"$[PX$]$[{num} cells selected é$]",accessibleColumnSpanContext:"$[PX$]$[{extent} wide é$]",accessibleRowSpanContext:"$[PX$]$[{extent} high é$]",accessibleRowContext:"$[PX$]$[Row {index} é$]",accessibleColumnContext:"$[PX$]$[Column {index} é$]",accessibleRowHeaderContext:"$[PX$]$[Row Header {index} é$]",accessibleColumnHeaderContext:"$[PX$]$[Column Header {index} é$]",accessibleRowEndHeaderContext:"$[PX$]$[Row End Header {index} é$]",accessibleColumnEndHeaderContext:"$[PX$]$[Column End Header {index} é$]",accessibleRowHeaderLabelContext:"$[PX$]$[Row Header Label {level} é$]",accessibleColumnHeaderLabelContext:"$[PX$]$[Column Header Label {level} é$]",accessibleRowEndHeaderLabelContext:"$[PX$]$[Row End Header Label {level} é$]",accessibleColumnEndHeaderLabelContext:"$[PX$]$[Column End Header Label {level} é$]",accessibleLevelContext:"$[PX$]$[Level {level} é$]",accessibleRangeSelectModeOn:"$$$[PX$$$]$$$[Add selected range of cells mode on. é$$$]",accessibleRangeSelectModeOff:"$$$[PX$$$]$$$[Add selected range of cells mode off. éë$$$]",accessibleFirstRow:"$$$[PX$$$]$$$[You have reached the first row. é$$$]",accessibleLastRow:"$$$[PX$$$]$$$[You have reached the last row. é$$$]",accessibleFirstColumn:"$$$[PX$$$]$$$[You have reached the first column é$$$]",accessibleLastColumn:"$$$[PX$$$]$$$[You have reached the last column. é$$$]",accessibleSelectionAffordanceTop:"$$$[PX$$$]$$$[Top selection handle. é$$$]",accessibleSelectionAffordanceBottom:"$$$[PX$$$]$$$[Bottom selection handle. é$$$]",msgFetchingData:"$$$[PX$$$]$$$[Fetching Data... é$$$]",msgNoData:"$$$[PX$$$]$$$[No items to display. é$$$]",labelResize:"$$$[PX$$$]$$$[Resize é$$$]",labelResizeWidth:"$$$[PX$$$]$$$[Resize Width é$$$]",labelResizeHeight:"$$$[PX$$$]$$$[Resize Height é$$$]",labelSortRow:"$$$[PX$$$]$$$[Sort Row é$$$]",labelSortRowAsc:"$$$[PX$$$]$$$[Sort Row Ascending é$$$]",labelSortRowDsc:"$$$[PX$$$]$$$[Sort Row Descending é$$$]",labelSortCol:"$$$[PX$$$]$$$[Sort Column é$$$]",labelSortColAsc:"$$$[PX$$$]$$$[Sort Column Ascending é$$$]",labelSortColDsc:"$$$[PX$$$]$$$[Sort Column Descending é$$$]",labelCut:"$$$[PX$$$]$$$[Cut é$$$]",labelPaste:"$$$[PX$$$]$$$[Paste é$$$]",labelEnableNonContiguous:"$$$[PX$$$]$$$[Enable Non-Contiguous Selection é$$$]",labelDisableNonContiguous:"$$$[PX$$$]$$$[Disable Non-Contiguous Selection é$$$]",labelResizeDialogSubmit:"$$$[PX$$$]$$$[OK é$$$]",labelResizeDialogCancel:"$$$[PX$$$]$$$[Cancel é$$$]"},"oj-ojRowExpander":{accessibleLevelDescription:"$[PX$]$[Level {level} é$]",accessibleRowDescription:"$[PX$]$[Level {level}, Row {num} of {total} é$]",accessibleRowExpanded:"$$$[PX$$$]$$$[Row expanded é$$$]",accessibleRowCollapsed:"$$$[PX$$$]$$$[Row collapsed é$$$]",accessibleStateExpanded:"$$$[PX$$$]$$$[expanded é$$$]",accessibleStateCollapsed:"$$$[PX$$$]$$$[collapsed é$$$]"},"oj-ojListView":{msgFetchingData:"$$$[PX$$$]$$$[Fetching Data... é$$$]",msgNoData:"$$$[PX$$$]$$$[No items to display. é$$$]",msgItemsAppended:"$[PX$]$[{count} items appended to the end. é$]",indexerCharacters:"$$$[PX$$$]$$$[A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z éëžéëž$$$]",accessibleReorderTouchInstructionText:"$$$[PX$$$]$$$[Double tap and hold.  Wait for the sound then drag to rearrange. éëžéëžéëžé$$$]",accessibleReorderBeforeItem:"$[PX$]$[Before {item} é$]",accessibleReorderAfterItem:"$[PX$]$[After {item} é$]",accessibleReorderInsideItem:"$[PX$]$[Into {item} é$]",accessibleNavigateSkipItems:"$[PX$]$[Skipping {numSkip} items é$]",labelCut:"$$$[PX$$$]$$$[Cut é$$$]",labelCopy:"$$$[PX$$$]$$$[Copy é$$$]",labelPaste:"$$$[PX$$$]$$$[Paste é$$$]",labelPasteBefore:"$$$[PX$$$]$$$[Paste Before é$$$]",labelPasteAfter:"$$$[PX$$$]$$$[Paste After é$$$]"},"oj-_ojLabel":{tooltipHelp:"$$$[PX$$$]$$$[Help é$$$]",tooltipRequired:"$$$[PX$$$]$$$[Required é$$$]"},"oj-ojLabel":{tooltipHelp:"$$$[PX$$$]$$$[Help é$$$]",tooltipRequired:"$$$[PX$$$]$$$[Required é$$$]"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"$$$[PX$$$]$$$[Decrement é$$$]",tooltipIncrement:"$$$[PX$$$]$$$[Increment é$$$]"},"oj-ojTable":{accessibleColumnContext:"$[PX$]$[Column {index} é$]",accessibleColumnHeaderContext:"$[PX$]$[Column Header {index} é$]",accessibleRowContext:"$[PX$]$[Row {index} é$]",accessibleSortable:"$[PX$]$[{id} sortable é$]",accessibleSortAscending:"$[PX$]$[{id} sorted in ascending order é$]",accessibleSortDescending:"$[PX$]$[{id} sorted in descending order é$]",accessibleStateSelected:"$$$[PX$$$]$$$[selected é$$$]",labelAccSelectionAffordanceTop:"$$$[PX$$$]$$$[Top selection handle é$$$]",labelAccSelectionAffordanceBottom:"$$$[PX$$$]$$$[Bottom selection handle é$$$]",labelEnableNonContiguousSelection:"$$$[PX$$$]$$$[Enable Non-Contiguous Selection é$$$]",labelDisableNonContiguousSelection:"$$$[PX$$$]$$$[Disable Non-Contiguous Selection é$$$]",labelResize:"$$$[PX$$$]$$$[Resize é$$$]",labelResizePopupSubmit:"$$$[PX$$$]$$$[OK é$$$]",labelResizePopupCancel:"$$$[PX$$$]$$$[Cancel é$$$]",labelResizePopupSpinner:"$$$[PX$$$]$$$[Resize Column é$$$]",labelSelectRow:"$$$[PX$$$]$$$[Select Row é$$$]",labelEditRow:"$$$[PX$$$]$$$[Edit Row é$$$]",labelSelectAndEditRow:"$$$[PX$$$]$$$[Select And Edit Row é$$$]",labelSelectColumn:"$$$[PX$$$]$$$[Select Column é$$$]",labelSort:"$$$[PX$$$]$$$[Sort é$$$]",labelSortAsc:"$$$[PX$$$]$$$[Sort Ascending é$$$]",labelSortDsc:"$$$[PX$$$]$$$[Sort Descending é$$$]",msgFetchingData:"$$$[PX$$$]$$$[Fetching Data... é$$$]",msgNoData:"$$$[PX$$$]$$$[No data to display. é$$$]",msgInitializing:"$$$[PX$$$]$$$[Initializing... é$$$]",msgColumnResizeWidthValidation:"$$$[PX$$$]$$$[Width value must be an integer. é$$$]",msgScrollPolicyMaxCountSummary:"$$$[PX$$$]$$$[Exceeded maximum rows for table scrolling. éëž$$$]",msgScrollPolicyMaxCountDetail:"$$$[PX$$$]$$$[Please reload with smaller data set. é$$$]",msgStatusSortAscending:"$[PX$]$[{0} sorted in ascending order. é$]",msgStatusSortDescending:"$[PX$]$[{0} sorted in descending order. é$]"},"oj-ojTabs":{labelCut:"$$$[PX$$$]$$$[Cut é$$$]",labelPasteBefore:"$$$[PX$$$]$$$[Paste Before é$$$]",labelPasteAfter:"$$$[PX$$$]$$$[Paste After é$$$]",labelRemove:"$$$[PX$$$]$$$[Remove é$$$]",labelReorder:"$$$[PX$$$]$$$[Reorder é$$$]",removeCueText:"$$$[PX$$$]$$$[Removable é$$$]"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"$$$[PX$$$]$$$[Search field é$$$]",noMatchesFound:"$$$[PX$$$]$$$[No matches found é$$$]",oneMatchesFound:"$$$[PX$$$]$$$[One match found é$$$]",moreMatchesFound:"$[PX$]$[{num} matches found é$]",filterFurther:"$$$[PX$$$]$$$[More results available, please filter further. éëžé$$$]"},"oj-ojSwitch":{SwitchON:"$$$[PX$$$]$$$[On é$$$]",SwitchOFF:"$$$[PX$$$]$$$[Off é$$$]"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"$$$[PX$$$]$$$[No matches found é$$$]",oneMatchesFound:"$$$[PX$$$]$$$[One match found é$$$]",moreMatchesFound:"$[PX$]$[{num} matches found é$]",filterFurther:"$$$[PX$$$]$$$[More results available, please filter further. éëžé$$$]"},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"$$$[PX$$$]$$$[No matches found é$$$]",oneMatchFound:"$$$[PX$$$]$$$[One match found é$$$]",multipleMatchesFound:"$[PX$]$[{num} matches found é$]",nOrMoreMatchesFound:"$[PX$]$[{num} or more matches found é$]",cancel:"$$$[PX$$$]$$$[Cancel é$$$]",labelAccOpenDropdown:"$$$[PX$$$]$$$[expand é$$$]",labelAccClearValue:"$$$[PX$$$]$$$[clear value é$$$]",noResultsLine1:"$$$[PX$$$]$$$[No results found é$$$]",noResultsLine2:"$$$[PX$$$]$$$[We can't find anything matching your search. éëžé$$$]"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"$$$[PX$$$]$$$[No matches found é$$$]",oneMatchesFound:"$$$[PX$$$]$$$[One match found é$$$]",moreMatchesFound:"$[PX$]$[{num} matches found é$]"},"oj-ojTree":{stateLoading:"$$$[PX$$$]$$$[Loading... é$$$]",labelNewNode:"$$$[PX$$$]$$$[New Node é$$$]",labelMultiSelection:"$$$[PX$$$]$$$[Multiple Selection é$$$]",labelEdit:"$$$[PX$$$]$$$[Edit é$$$]",labelCreate:"$$$[PX$$$]$$$[Create é$$$]",labelCut:"$$$[PX$$$]$$$[Cut é$$$]",labelCopy:"$$$[PX$$$]$$$[Copy é$$$]",labelPaste:"$$$[PX$$$]$$$[Paste é$$$]",labelPasteAfter:"$$$[PX$$$]$$$[Paste After é$$$]",labelPasteBefore:"$$$[PX$$$]$$$[Paste Before é$$$]",labelRemove:"$$$[PX$$$]$$$[Remove é$$$]",labelRename:"$$$[PX$$$]$$$[Rename é$$$]",labelNoData:"$$$[PX$$$]$$$[No data é$$$]"},"oj-ojPagingControl":{labelAccPaging:"$$$[PX$$$]$$$[Pagination é$$$]",labelAccPageNumber:"$[PX$]$[Page {pageNum} content loaded é$]",labelAccNavFirstPage:"$$$[PX$$$]$$$[First Page é$$$]",labelAccNavLastPage:"$$$[PX$$$]$$$[Last Page é$$$]",labelAccNavNextPage:"$$$[PX$$$]$$$[Next Page é$$$]",labelAccNavPreviousPage:"$$$[PX$$$]$$$[Previous Page é$$$]",labelAccNavPage:"$$$[PX$$$]$$$[Page é$$$]",labelLoadMore:"$$$[PX$$$]$$$[Show More... é$$$]",labelLoadMoreMaxRows:"$[PX$]$[Reached Maximum Limit of {maxRows} rows éë$]",labelNavInputPage:"$$$[PX$$$]$$$[Page é$$$]",labelNavInputPageMax:"$[PX$]$[of {pageMax} é$]",fullMsgItemRange:"$[PX$]$[{pageFrom}-{pageTo} of {pageMax} items éë$]",fullMsgItemRangeAtLeast:"$[PX$]$[{pageFrom}-{pageTo} of at least {pageMax} items éëžéë$]",fullMsgItemRangeApprox:"$[PX$]$[{pageFrom}-{pageTo} of approx {pageMax} items éëžé$]",msgItemRangeNoTotal:"$[PX$]$[{pageFrom}-{pageTo} items é$]",fullMsgItem:"$[PX$]$[{pageTo} of {pageMax} items é$]",fullMsgItemAtLeast:"$[PX$]$[{pageTo} of at least {pageMax} items é$]",fullMsgItemApprox:"$[PX$]$[{pageTo} of approx {pageMax} items é$]",msgItemNoTotal:"$[PX$]$[{pageTo} items é$]",msgItemRangeCurrent:"$[PX$]$[{pageFrom}-{pageTo} é$]",msgItemRangeCurrentSingle:"$[PX$]$[{pageFrom} é$]",msgItemRangeOf:"$$$[PX$$$]$$$[of é$$$]",msgItemRangeOfAtLeast:"$$$[PX$$$]$$$[of at least é$$$]",msgItemRangeOfApprox:"$$$[PX$$$]$$$[of approx. é$$$]",msgItemRangeItems:"$$$[PX$$$]$$$[items é$$$]",tipNavInputPage:"$$$[PX$$$]$$$[Go To Page é$$$]",tipNavPageLink:"$[PX$]$[Go To Page {pageNum} é$]",tipNavNextPage:"$$$[PX$$$]$$$[Next é$$$]",tipNavPreviousPage:"$$$[PX$$$]$$$[Previous é$$$]",tipNavFirstPage:"$$$[PX$$$]$$$[First é$$$]",tipNavLastPage:"$$$[PX$$$]$$$[Last é$$$]",pageInvalid:{summary:"$$$[PX$$$]$$$[The page value entered is invalid. é$$$]",detail:"$$$[PX$$$]$$$[Please enter a value greater than 0. é$$$]"},maxPageLinksInvalid:{summary:"$$$[PX$$$]$$$[Value for maxPageLinks is invalid. é$$$]",detail:"$$$[PX$$$]$$$[Please enter a value greater than 4. é$$$]"}},"oj-ojMasonryLayout":{labelCut:"$$$[PX$$$]$$$[Cut é$$$]",labelPasteBefore:"$$$[PX$$$]$$$[Paste Before é$$$]",labelPasteAfter:"$$$[PX$$$]$$$[Paste After é$$$]"},"oj-panel":{labelAccButtonExpand:"$$$[PX$$$]$$$[Expand é$$$]",labelAccButtonCollapse:"$$$[PX$$$]$$$[Collapse é$$$]",labelAccButtonRemove:"$$$[PX$$$]$$$[Remove é$$$]",labelAccFlipForward:"$$$[PX$$$]$$$[Flip forward é$$$]",labelAccFlipBack:"$$$[PX$$$]$$$[Flip back é$$$]",tipDragToReorder:"$$$[PX$$$]$$$[Drag to reorder é$$$]",labelAccDragToReorder:"$$$[PX$$$]$$$[Drag to reorder, context menu available éë$$$]"},"oj-ojChart":{labelDefaultGroupName:"$[PX$]$[Group {0} é$]",labelSeries:"$$$[PX$$$]$$$[Series é$$$]",labelGroup:"$$$[PX$$$]$$$[Group é$$$]",labelDate:"$$$[PX$$$]$$$[Date é$$$]",labelValue:"$$$[PX$$$]$$$[Value é$$$]",labelTargetValue:"$$$[PX$$$]$$$[Target é$$$]",labelX:"$$$[PX$$$]$$$[X é$$$]",labelY:"$$$[PX$$$]$$$[Y é$$$]",labelZ:"$$$[PX$$$]$$$[Z é$$$]",labelPercentage:"$$$[PX$$$]$$$[Percentage é$$$]",labelLow:"$$$[PX$$$]$$$[Low é$$$]",labelHigh:"$$$[PX$$$]$$$[High é$$$]",labelOpen:"$$$[PX$$$]$$$[Open é$$$]",labelClose:"$$$[PX$$$]$$$[Close é$$$]",labelVolume:"$$$[PX$$$]$$$[Volume é$$$]",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"$$$[PX$$$]$$$[Min é$$$]",labelMax:"$$$[PX$$$]$$$[Max é$$$]",labelOther:"$$$[PX$$$]$$$[Other é$$$]",tooltipPan:"$$$[PX$$$]$$$[Pan é$$$]",tooltipSelect:"$$$[PX$$$]$$$[Marquee select é$$$]",tooltipZoom:"$$$[PX$$$]$$$[Marquee zoom é$$$]",componentName:"$$$[PX$$$]$$$[Chart é$$$]"},"oj-dvtBaseGauge":{componentName:"$$$[PX$$$]$$$[Gauge é$$$]"},"oj-ojDiagram":{promotedLink:"$[PX$]$[{0} link é$]",promotedLinks:"$[PX$]$[{0} links é$]",promotedLinkAriaDesc:"$$$[PX$$$]$$$[Indirect é$$$]",componentName:"$$$[PX$$$]$$$[Diagram é$$$]"},"oj-ojGantt":{componentName:"$$$[PX$$$]$$$[Gantt é$$$]",accessibleDurationDays:"$[PX$]$[{0} days é$]",accessibleDurationHours:"$[PX$]$[{0} hours é$]",accessibleTaskInfo:"$[PX$]$[Start time is {0}, end time is {1}, duration is {2} éëžéëž$]",accessibleMilestoneInfo:"$[PX$]$[Time is {0} é$]",accessibleRowInfo:"$[PX$]$[Row {0} é$]",accessibleTaskTypeMilestone:"$$$[PX$$$]$$$[Milestone é$$$]",accessibleTaskTypeSummary:"$$$[PX$$$]$$$[Summary é$$$]",accessiblePredecessorInfo:"$[PX$]$[{0} predecessors é$]",accessibleSuccessorInfo:"$[PX$]$[{0} successors é$]",accessibleDependencyInfo:"$[PX$]$[Dependency type {0}, connects {1} to {2} éëž$]",startStartDependencyAriaDesc:"$$$[PX$$$]$$$[start to start é$$$]",startFinishDependencyAriaDesc:"$$$[PX$$$]$$$[start to finish é$$$]",finishStartDependencyAriaDesc:"$$$[PX$$$]$$$[finish to start é$$$]",finishFinishDependencyAriaDesc:"$$$[PX$$$]$$$[finish to finish é$$$]",tooltipZoomIn:"$$$[PX$$$]$$$[Zoom In é$$$]",tooltipZoomOut:"$$$[PX$$$]$$$[Zoom Out é$$$]",labelLevel:"$$$[PX$$$]$$$[Level é$$$]",labelRow:"$$$[PX$$$]$$$[Row é$$$]",labelStart:"$$$[PX$$$]$$$[Start é$$$]",labelEnd:"$$$[PX$$$]$$$[End é$$$]",labelDate:"$$$[PX$$$]$$$[Date é$$$]",labelBaselineStart:"$$$[PX$$$]$$$[Baseline Start é$$$]",labelBaselineEnd:"$$$[PX$$$]$$$[Baseline End é$$$]",labelBaselineDate:"$$$[PX$$$]$$$[Baseline Date é$$$]",labelLabel:"$$$[PX$$$]$$$[Label é$$$]",labelProgress:"$$$[PX$$$]$$$[Progress é$$$]",labelMoveBy:"$$$[PX$$$]$$$[Move By é$$$]",labelResizeBy:"$$$[PX$$$]$$$[Resize By é$$$]",taskMoveInitiated:"$$$[PX$$$]$$$[Task move initiated é$$$]",taskResizeEndInitiated:"$$$[PX$$$]$$$[Task resize end initiated é$$$]",taskResizeStartInitiated:"$$$[PX$$$]$$$[Task resize start initiated é$$$]",taskMoveSelectionInfo:"$[PX$]$[{0} others selected é$]",taskResizeSelectionInfo:"$[PX$]$[{0} others selected é$]",taskMoveInitiatedInstruction:"$$$[PX$$$]$$$[Use the arrow keys to move é$$$]",taskResizeInitiatedInstruction:"$$$[PX$$$]$$$[Use the arrow keys to resize é$$$]",taskMoveFinalized:"$$$[PX$$$]$$$[Task move finalized é$$$]",taskResizeFinalized:"$$$[PX$$$]$$$[Task resize finalized é$$$]",taskMoveCancelled:"$$$[PX$$$]$$$[Task move cancelled é$$$]",taskResizeCancelled:"$$$[PX$$$]$$$[Task resize cancelled é$$$]",taskResizeStartHandle:"$$$[PX$$$]$$$[Task resize start handle é$$$]",taskResizeEndHandle:"$$$[PX$$$]$$$[Task resize end handle é$$$]"},"oj-ojLegend":{componentName:"$$$[PX$$$]$$$[Legend é$$$]",tooltipExpand:"$$$[PX$$$]$$$[Expand é$$$]",tooltipCollapse:"$$$[PX$$$]$$$[Collapse é$$$]"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"$$$[PX$$$]$$$[Other é$$$]",labelGroup:"$$$[PX$$$]$$$[Group é$$$]",labelSize:"$$$[PX$$$]$$$[Size é$$$]",labelAdditionalData:"$$$[PX$$$]$$$[Additional Data é$$$]",componentName:"$[PX$]$[{0} Box é$]"},"oj-ojPictoChart":{componentName:"$$$[PX$$$]$$$[Picture Chart é$$$]"},"oj-ojSparkChart":{componentName:"$$$[PX$$$]$$$[Chart é$$$]"},"oj-ojSunburst":{labelColor:"$$$[PX$$$]$$$[Color é$$$]",labelSize:"$$$[PX$$$]$$$[Size é$$$]",tooltipExpand:"$$$[PX$$$]$$$[Expand é$$$]",tooltipCollapse:"$$$[PX$$$]$$$[Collapse é$$$]",componentName:"$$$[PX$$$]$$$[Sunburst é$$$]"},"oj-ojTagCloud":{componentName:"$$$[PX$$$]$$$[Tag Cloud é$$$]"},"oj-ojThematicMap":{componentName:"$$$[PX$$$]$$$[Thematic Map é$$$]",areasRegion:"$$$[PX$$$]$$$[Areas é$$$]",linksRegion:"$$$[PX$$$]$$$[Links é$$$]",markersRegion:"$$$[PX$$$]$$$[Markers é$$$]"},"oj-ojTimeAxis":{componentName:"$$$[PX$$$]$$$[Time Axis é$$$]"},"oj-ojTimeline":{componentName:"$$$[PX$$$]$$$[Timeline é$$$]",accessibleItemDesc:"$[PX$]$[Description is {0}. é$]",accessibleItemEnd:"$[PX$]$[End time is {0}. é$]",accessibleItemStart:"$[PX$]$[Start time is {0}. é$]",accessibleItemTitle:"$[PX$]$[Title is {0}. é$]",labelSeries:"$$$[PX$$$]$$$[Series é$$$]",tooltipZoomIn:"$$$[PX$$$]$$$[Zoom In é$$$]",tooltipZoomOut:"$$$[PX$$$]$$$[Zoom Out é$$$]",labelStart:"$$$[PX$$$]$$$[Start é$$$]",labelEnd:"$$$[PX$$$]$$$[End é$$$]",labelDate:"$$$[PX$$$]$$$[Date é$$$]",labelTitle:"$$$[PX$$$]$$$[Title é$$$]",labelDescription:"$$$[PX$$$]$$$[Description é$$$]"},"oj-ojTreemap":{labelColor:"$$$[PX$$$]$$$[Color é$$$]",labelSize:"$$$[PX$$$]$$$[Size é$$$]",tooltipIsolate:"$$$[PX$$$]$$$[Isolate é$$$]",tooltipRestore:"$$$[PX$$$]$$$[Restore é$$$]",componentName:"$$$[PX$$$]$$$[Treemap é$$$]"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"$$$[PX$$$]$$$[K é$$$]",labelScalingSuffixMillion:"$$$[PX$$$]$$$[M é$$$]",labelScalingSuffixBillion:"$$$[PX$$$]$$$[B é$$$]",labelScalingSuffixTrillion:"$$$[PX$$$]$$$[T é$$$]",labelScalingSuffixQuadrillion:"$$$[PX$$$]$$$[Q é$$$]",labelInvalidData:"$$$[PX$$$]$$$[Invalid data é$$$]",labelNoData:"$$$[PX$$$]$$$[No data to display é$$$]",labelClearSelection:"$$$[PX$$$]$$$[Clear Selection é$$$]",labelDataVisualization:"$$$[PX$$$]$$$[Data Visualization é$$$]",stateSelected:"$$$[PX$$$]$$$[Selected é$$$]",stateUnselected:"$$$[PX$$$]$$$[Unselected é$$$]",stateMaximized:"$$$[PX$$$]$$$[Maximized é$$$]",stateMinimized:"$$$[PX$$$]$$$[Minimized é$$$]",stateExpanded:"$$$[PX$$$]$$$[Expanded é$$$]",stateCollapsed:"$$$[PX$$$]$$$[Collapsed é$$$]",stateIsolated:"$$$[PX$$$]$$$[Isolated é$$$]",stateHidden:"$$$[PX$$$]$$$[Hidden é$$$]",stateVisible:"$$$[PX$$$]$$$[Visible é$$$]",stateDrillable:"$$$[PX$$$]$$$[Drillable é$$$]",labelAndValue:"{0}: {1}",labelCountWithTotal:"$[PX$]$[{0} of {1} é$]"},"oj-ojNavigationList":{defaultRootLabel:"$$$[PX$$$]$$$[Navigation List é$$$]",hierMenuBtnLabel:"$$$[PX$$$]$$$[Hierarchical Menu button é$$$]",selectedLabel:"$$$[PX$$$]$$$[selected é$$$]",previousIcon:"$$$[PX$$$]$$$[Previous é$$$]",msgFetchingData:"$$$[PX$$$]$$$[Fetching Data... é$$$]",msgNoData:"$$$[PX$$$]$$$[No items to display. é$$$]",overflowItemLabel:"$$$[PX$$$]$$$[More é$$$]",accessibleReorderTouchInstructionText:"$$$[PX$$$]$$$[Double tap and hold.  Wait for the sound then drag to rearrange. éëžéëžéëžé$$$]",accessibleReorderBeforeItem:"$[PX$]$[Before {item} é$]",accessibleReorderAfterItem:"$[PX$]$[After {item} é$]",labelCut:"$$$[PX$$$]$$$[Cut é$$$]",labelPasteBefore:"$$$[PX$$$]$$$[Paste Before é$$$]",labelPasteAfter:"$$$[PX$$$]$$$[Paste After é$$$]",labelRemove:"$$$[PX$$$]$$$[Remove é$$$]",removeCueText:"$$$[PX$$$]$$$[Removable é$$$]"},"oj-ojSlider":{noValue:"$$$[PX$$$]$$$[ojSlider has no value é$$$]",maxMin:"$$$[PX$$$]$$$[Max must not be less than or equal to min éëž$$$]",startEnd:"$$$[PX$$$]$$$[value.start must not be greater than value.end éëžé$$$]",valueRange:"$$$[PX$$$]$$$[Value must be within min to max range éë$$$]",optionNum:"$[PX$]$[{option} option is not a number é$]",invalidStep:"$$$[PX$$$]$$$[Invalid step; step must be > 0 é$$$]",lowerValueThumb:"$$$[PX$$$]$$$[lower value thumb é$$$]",higherValueThumb:"$$$[PX$$$]$$$[higher value thumb é$$$]"},"oj-ojDialog":{labelCloseIcon:"$$$[PX$$$]$$$[Close é$$$]"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"$$$[PX$$$]$$$[Entering pop-up. Press F6 to navigate between the pop-up and associated control. éëžéëžéëžéëžéëž$$$]",ariaLiveRegionInitialFocusNone:"$$$[PX$$$]$$$[Pop-up opened. Press F6 to navigate between the pop-up and associated control. éëžéëžéëžéëžéë$$$]",ariaLiveRegionInitialFocusFirstFocusableTouch:"$$$[PX$$$]$$$[Entering pop-up. Pop-up can be closed by navigating to the last link within the pop-up. éëžéëžéëžéëžéëžéë$$$]",ariaLiveRegionInitialFocusNoneTouch:"$$$[PX$$$]$$$[Pop-up opened. Navigate to the next link to establish focus within the pop-up. éëžéëžéëžéëžéë$$$]",ariaFocusSkipLink:"$$$[PX$$$]$$$[Double tap to navigate to the open pop-up. éëž$$$]",ariaCloseSkipLink:"$$$[PX$$$]$$$[Double tap to close the open pop-up. é$$$]"},"oj-ojRefresher":{ariaRefreshLink:"$$$[PX$$$]$$$[Activate link to refresh content é$$$]",ariaRefreshingLink:"$$$[PX$$$]$$$[Refreshing content é$$$]",ariaRefreshCompleteLink:"$$$[PX$$$]$$$[Refresh complete é$$$]"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"$$$[PX$$$]$$$[Show start actions é$$$]",ariaShowEndActionsDescription:"$$$[PX$$$]$$$[Show end actions é$$$]",ariaHideActionsDescription:"$$$[PX$$$]$$$[Hide actions é$$$]"},"oj-ojIndexer":{indexerCharacters:"$$$[PX$$$]$$$[A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z éëžéëž$$$]",indexerOthers:"#",ariaDisabledLabel:"$$$[PX$$$]$$$[No matching group header é$$$]",ariaOthersLabel:"$$$[PX$$$]$$$[number é$$$]",ariaInBetweenText:"$[PX$]$[Between {first} and {second} é$]",ariaKeyboardInstructionText:"$$$[PX$$$]$$$[Press enter to select value. é$$$]",ariaTouchInstructionText:"$$$[PX$$$]$$$[Double tap and hold to enter gesture mode, then drag up or down to adjust value. éëžéëžéëžéëžéëž$$$]"},"oj-ojMenu":{labelCancel:"$$$[PX$$$]$$$[Cancel é$$$]",ariaFocusSkipLink:"$$$[PX$$$]$$$[Focus is within the menu, double tap or swipe to move focus to the first menu item. éëžéëžéëžéëžéëž$$$]"},"oj-ojColorSpectrum":{labelHue:"$$$[PX$$$]$$$[Hue é$$$]",labelOpacity:"$$$[PX$$$]$$$[Opacity é$$$]",labelSatLum:"$$$[PX$$$]$$$[Saturation/Luminance é$$$]",labelThumbDesc:"$$$[PX$$$]$$$[Color spectrum four way slider. é$$$]"},"oj-ojColorPalette":{labelNone:"$$$[PX$$$]$$$[None é$$$]"},"oj-ojColorPicker":{labelSwatches:"$$$[PX$$$]$$$[Swatches é$$$]",labelCustomColors:"$$$[PX$$$]$$$[Custom Colors é$$$]",labelPrevColor:"$$$[PX$$$]$$$[Previous Color é$$$]",labelDefColor:"$$$[PX$$$]$$$[Default Color é$$$]",labelDelete:"$$$[PX$$$]$$$[Delete é$$$]",labelDeleteQ:"$$$[PX$$$]$$$[Delete? é$$$]",labelAdd:"$$$[PX$$$]$$$[Add é$$$]",labelAddColor:"$$$[PX$$$]$$$[Add color é$$$]",labelMenuHex:"$$$[PX$$$]$$$[HEX é$$$]",labelMenuRgba:"$$$[PX$$$]$$$[RGBa é$$$]",labelMenuHsla:"$$$[PX$$$]$$$[HSLa é$$$]",labelSliderHue:"$$$[PX$$$]$$$[Hue é$$$]",labelSliderSaturation:"$$$[PX$$$]$$$[Saturation é$$$]",labelSliderSat:"$$$[PX$$$]$$$[Sat é$$$]",labelSliderLightness:"$$$[PX$$$]$$$[Lightness é$$$]",labelSliderLum:"$$$[PX$$$]$$$[Luminosity é$$$]",labelSliderAlpha:"$$$[PX$$$]$$$[Alpha é$$$]",labelOpacity:"$$$[PX$$$]$$$[Opacity é$$$]",labelSliderRed:"$$$[PX$$$]$$$[Red é$$$]",labelSliderGreen:"$$$[PX$$$]$$$[Green é$$$]",labelSliderBlue:"$$$[PX$$$]$$$[Blue é$$$]"},"oj-ojFilePicker":{dropzoneText:"$$$[PX$$$]$$$[Drop files here or click to upload é$$$]",singleFileUploadError:"$$$[PX$$$]$$$[Upload one file at a time. é$$$]",singleFileTypeUploadError:"$[PX$]$[You can't upload files of type {fileType}. éëž$]",multipleFileTypeUploadError:"$[PX$]$[You can't upload files of type: {fileTypes}. éëžé$]",dropzonePrimaryText:"$$$[PX$$$]$$$[Drag and Drop é$$$]",secondaryDropzoneText:"$$$[PX$$$]$$$[Select a file or drop one here. é$$$]",secondaryDropzoneTextMultiple:"$$$[PX$$$]$$$[Select or drop files here. é$$$]",unknownFileType:"$$$[PX$$$]$$$[unknown é$$$]"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"$$$[PX$$$]$$$[In Progress é$$$]"},"oj-ojMessage":{labelCloseIcon:"$$$[PX$$$]$$$[Close é$$$]",categories:{error:"$$$[PX$$$]$$$[Error é$$$]",warning:"$$$[PX$$$]$$$[Warning é$$$]",info:"$$$[PX$$$]$$$[Information é$$$]",confirmation:"$$$[PX$$$]$$$[Confirmation é$$$]"}},"oj-ojSelector":{checkboxAriaLabel:"$[PX$]$[Checkbox Select {rowKey} é$]"},"oj-ojMessages":{labelLandmark:"$$$[PX$$$]$$$[Messages é$$$]",ariaLiveRegion:{navigationFromKeyboard:"$$$[PX$$$]$$$[Entering messages region. Press F6 to navigate back to prior focused element. éëžéëžéëžéëžéë$$$]",navigationToTouch:"$$$[PX$$$]$$$[Messages region has new messages. Use the voice-over rotor to navigate to the messages landmark. éëžéëžéëžéëžéëžéëžé$$$]",navigationToKeyboard:"$$$[PX$$$]$$$[Messages region has new messages.  Press F6 to navigate to the most recent message region. éëžéëžéëžéëžéëžéëž$$$]",newMessage:"$[PX$]$[Message category {category}. {summary}. {detail}. éëžéë$]"}}});