mod utils;

use wasm_bindgen::prelude::*;
use web_sys::HtmlSpanElement;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rust-wasm!");
}

#[wasm_bindgen]
pub fn calc_pi(count: u32) {
    let mut i = 1_u32;
    let mut value = 1.0_f64;
    while i <= count {
        let index = 2 * i - 1;
        value -= 1.0 / ((2 * index + 1) as f64);
        value += 1.0 / ((2 * (index + 1) + 1) as f64);
        i += 1;
    }
    value *= 4.0;
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();
    let span = document.get_element_by_id("pi").unwrap();
    let span = span.dyn_ref::<HtmlSpanElement>().unwrap();
    span.set_inner_html(&value.to_string());
}
