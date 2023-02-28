#include <iostream>
using namespace std;

int main(){
    cout << "Hello, World!" << endl;

#ifdef FALSE
    char *p = (char *)malloc(50);
    strcpy(p, "Tako");
    cout << p << endl;
    free(p);
#endif

    return 0;
}