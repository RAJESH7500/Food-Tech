//0 1 1 2 3 5 8

#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void fib(int n,int a,int b)
{
    if(a+b>n)
    {
        return;
    }
    cout<<a+b<<" ";
    fib(n,b,a+b);
}
int check_duplicate(int arr[],int n)
{
    unordered_set<int>s;
    for(int i=0;i<n;i++)
    {
         if(s.find(arr[i])!=s.end()) return 1;
         else{
             s.insert(arr[i]);
         }
    }
    return 0;
}


// 1 2 3 4scg

// i = 0 

int main()
{
     
    int arr[]={1,2,3,4,3};
    bool res = check_duplicate(arr,8);
    cout<<res<<endl;
    return 0;

}