#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// 1. Write a program in C to input a string and print it. Go to the editor
// Test Data :
// Input the string : Welcome, w3resource
// Expected Output :
// The string you entered is : Welcome, w3resource 
//----------------------------------
//  int main() 
//  {
//      printf("W3resource, Wellcome");
//      return 0;
//  }
 //----------------------------------
//  2. Write a program in C to find the length of a string without using library function. Go to the editor

// Test Data :
// Input the string : w3resource.com

// Expected Output :

// Length of the string is : 15 
//-----------------------------------
// int main(int argc, char* argv[])
// {
//     char string[] = "w3resource.com";
//     // strlen(string) kiem tra do dai chuoi
//     int length = strlen(string);

//     printf("Length of the string is : %d\n", length);
//     return 0;
// }
//-----------------------------------
//3. Write a program in C to separate the individual characters from a string.
// int main(int argc, char* argv[])
// {
//     char string[] = "w3resource.com";
//     int l = 0;
//     while (string[l] != '\0')
//     {
//         printf("%c ", string[l]);
//         l++;
//     }
//     return 0;
// }
//------------------------------------
//4. Write a program in C to print individual characters of string in reverse order.
// int main (int argc, char* argv[])
// {
//     char string[] = "w3resource.com";
    
//     for(int i = strlen(string); i >= 0; i--)
//     {
//         printf("%c ", string[i]);
//     }
    
//     return 0;
// }
//5. Write a program in C to count the total number of words in a string.
int main(int argc, char* argv[])
{
    char string[] = "This is w3resource.com";
    for(int i = 0; i < strlen(string); i++)
    {
    
    }
}