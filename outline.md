# RIP `TSRMLS_CC`

## Ch-ch-ch-ch-changes

## Possible approaches

1. One way migration
2. Separate branches
3. Support both in same codebase

## One way migration

Advantage: simple

Disadvantage: PHP 5 users are out in the cold

## Separate branches

Advantage: support both

Disadvantage: double the work unless you have the thinnest of thin wrappers

## Shared codebase

Advantage: support both; no code drift between versions

Disadvantage: more complex; code becomes uglier

## Problems with shared codebases

### Parameter parsing

### `zend_long`

### `IS_BOOL`: `IS_TRUE` and `IS_FALSE`

### Strings

`zend_string`

`RETURN_STRING`, `RETURN_STRINGL`, `ZVAL_STRING` and `ZVAL_STRINGL` macros don't take duplicate parameters any more.

Ditto `add_assoc_string` and `add_assoc_stringl`.

String lengths are now `size_t`, which causes problems with `zend_parse_parameters`. Probably #1 issue!

### Resources

`zend_rsrc_list_entry` and friends are gone.

Resources are no longer indexes; zvals can be of a specific `IS_RESOURCE` type that contains a `zend_resource` structure, accessible through `Z_RES()`.

APIs are mutually incompatible, and can't be made compatible without a shim.

Reference counts are now handled as part of the zval, not through `zend_list_addref` and `zend_list_delref`.

#### Creating

Old: `ZEND_REGISTER_RESOURCE(zv, ptr, type)`\
New:

### Objects

#### `EG(This)` is no longer modifiable

Thank fuck. Use `getThis()`.

### Calling back into PHP

Huge pain. Parameters went from `zval **` to `zval`!

`zend_call_method()` and friends now take a `zval *` instead of `zval **`.

## Tools

https://github.com/flaupretre/pecl-compat

## Improvements

It's not all bad. Let's look at the awesome stuff you get with PHP 7 only extensions.

### Strings

### New parameter parsing APIs

### Hash table iteration
