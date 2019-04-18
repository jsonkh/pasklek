mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}
extern {
    fn fib(i: &i32);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rustlek!");
}

#[wasm_bindgen]
#[no_mangle]
pub fn fib(n: i32) -> i32{
    match n {
        0 => 0,
        1 => 1,
        _ => fib(n-1) + fib(n-2),
    }
}