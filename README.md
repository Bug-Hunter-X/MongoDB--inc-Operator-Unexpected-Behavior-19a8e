# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates a common error related to the MongoDB `$inc` operator. The error occurs when using `$inc` to increment a field that does not exist in a document.  The `$inc` operator updates a field by adding the specified value to its current value. If the field does not exist, it should be created and initialized with the value. However, in this particular case, it does not behave as expected if the field doesn't exist. The solution showcases how to correctly handle this scenario.