initSidebarItems({"fn":[["clear_history","Clear the history list by deleting all of the entries, in the same manner as the History library's `clear_history()` function. This differs from `clear_history` because it frees private data Readline saves in the history list."],["get_termcap","Retrieve the string value of the termcap capability `cap`. Readline fetches the termcap entry for the current terminal name and uses those capabilities to move around the screen line and perform other terminal-specific operations, like erasing a line. Readline does not use all of a terminal's capabilities, and this function will return values for only those capabilities Readline uses."],["macro_dumper","Print the key sequences bound to macros and their values, using the current keymap, to `rl_outstream`. If `readable` is true, the list is formatted in such a way that it can be made part of an inputrc file and re-read."],["set_paren_blink_timeout","Set the time interval (in microseconds) that Readline waits when showing a balancing character when `blink-matching-paren` has been enabled."],["variable_bind","Make the Readline variable `name` have `value`. This behaves as if the readline command `set variable value` had been executed in an inputrc file (see section [1.3.1 Readline Init File Syntax]). [1.3.1 readline init file syntax]: https://goo.gl/Ivqovs"],["variable_dumper","Print the readline variable names and their current values to `rl_outstream`. If readable is true, the list is formatted in such a way that it can be made part of an inputrc file and re-read."],["variable_value","Return a string representing the value of the Readline variable `name`. For boolean variables, this string is either `on' or `off'."]]});