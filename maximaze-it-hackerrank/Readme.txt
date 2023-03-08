You are given a function f(X) = X² . You are also given K lists. The i^th list consists of N_i elements.

You have to pick one element from each list so that the value from the equation below is maximized:

S = (f(X1) + f(X2) + f(X3) ... f(XK))%M

X_i denotes the element picked from the i^th list . Find the maximized value Smax obtained.

% denotes the modulo operator.

Note that you need to take exactly one element from each list, not necessarily the largest element. You add the squares of the chosen elements and perform the modulo operation. The maximum value that you can obtain, will be the answer to the problem.


Input Format:
The first line contains 2 space separated integers K and M.
The next K lines each contains an integer N_i, denoting the number of elements in the i^th list, followed by N_i space separated integers denoting the elements in the list.


Sample:
3 1000
2 5 4
3 7 8 9 
5 5 7 8 9 10 


Output:
Output a single integer denoting the value Smax.

Sample:
206