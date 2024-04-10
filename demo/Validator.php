<?php

class Validator
{
    /**
     * This is a "pure" function because it's not dependent on any internal state, data, or other classes.
     * In cases of having pure functions, it's a good idea to make them static so they can be used anywhere else.
     */
    public static function string($value, $minimumCharLength = 1, $maximumCharLength = INF)
    {
        $value = trim($value);

        return strlen($value) >= $minimumCharLength && strlen($value) <= $maximumCharLength;
    }

    public static function email($value)
    {
        return filter_var($value, FILTER_VALIDATE_EMAIL);
    }
}
