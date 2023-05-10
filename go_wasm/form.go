package main
 
import (
	"strconv"
	"syscall/js"
)

func calc(this js.Value, args []js.Value) any {
	document := js.Global().Get("document")
    countText := document.Call("getElementById", "countText")
    resultText := document.Call("getElementById", "resultText")

	countValue, err := strconv.ParseInt(countText.Get("value").String(), 10, 64)
	if err != nil {
		return map[string]any{"error": err.Error()}
	}
    value := 1.0
    for i := int64(1); i <= countValue; i++ {
        index := 2 * i - 1
        value -= 1.0 / float64(2 * index + 1)
        value += 1.0 / float64(2 * (index + 1) + 1)
    }
    value *= 4.0
    resultText.Set("textContent", value)
	return map[string]any{"result": value}
}

func main() {
	js.Global().Set("goCalc", js.FuncOf(calc))
	select {}
}