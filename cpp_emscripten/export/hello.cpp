#include <iostream>
#include <emscripten/emscripten.h>
using namespace std;

int main(){
    cout << "Hello, World!" << endl;

    return 0;
}

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE int calcSum(int num1, int num2) {
    return num1 + num2;
}

#ifdef FALSE
EXTERN EMSCRIPTEN_KEEPALIVE bool isOdd(int num) {
    return num % 2 != 0;
}
#endif
