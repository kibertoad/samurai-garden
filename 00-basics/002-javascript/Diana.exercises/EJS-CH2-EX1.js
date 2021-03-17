/*Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
 */
let a = '#';
while (a.length < 8) {
    console.log(a);
    a = a + '#';
}