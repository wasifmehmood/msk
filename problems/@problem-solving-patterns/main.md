# Problem Solving Patterns

/************ Frequency Counter Pattern Start************/

## 1: Frequency Counter Pattern
```
    When should this pattern be used?
    Frequency counters are most frequently used to compare data in some way. 
    Some common problems I have seen on Leetcode where a frequency counter could be used are 
    ones that compare different arrays or strings, such as checking whether two strings are 
    anagrams of each other.
    Used mostly on string and arrays

    Why use this pattern?
    * Helps to avoid using a nested loop ( O(n2) => O(n))
```
/************ Frequency Counter Pattern Start************/

/************ Sliding Window Start************/

## 2: Sliding Window:
```
    It is used to solve problems related to arrays or strings. It involves creating a "window" of fixed size and 
    sliding it over the input data structure (array or string) to perform some computation.
    It is often used to reduce the time complexity of the problem from O(n²) to O(n).

    Following are some ways you can identify that the given problem might require a sliding window:
        * The problem input is a linear data structure such as a linked list, array, or string.
        * You’re asked to find the longest/shortest substring, subarray, or a desired value.

    Common problems you use the sliding window pattern with:
        * Maximum sum subarray of size ‘K’ (easy)
        * Longest substring with ‘K’ distinct characters (medium)
        * String anagrams (hard)
```
/************ Sliding Window End************/