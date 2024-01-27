#!/usr/bin/env bash
# 统计代码行数（Count Lines of Code）

function usage()
{
    echo "usage:"
    echo "  1. nothing input,use current dir."
    echo "  2. -a absolute_dir."
    echo "  3. -d base_dir."
    echo "  4. -s sub_dir."
    exit
}

function usage_exit() {
    usage
    exit 
}

argc=$#
args=$*
# shellcheck disable=SC2206
args_arr=($args)
# shellcheck disable=SC2006
base_path=`pwd`
i=0
while [ $i -lt $argc ]
do
    case ${args_arr[$i]} in
    "-a")
        if [ $argc -le $(($i+1)) ]; then
            usage_exit
        fi
        base_path=${args_arr[$(($i+1))]}
        i=$(($i+2))
    ;;
    "-b")
        if [ $argc -le $(($i+1)) ]; then
            usage_exit
        fi
        base_path=${args_arr[$(($i+1))]}
        i=$(($i+2))
    ;;
    "-s")
        if [ $argc -le $(($i+1)) ]; then
            usage_exit
        fi
        base_path=$base_path/${args_arr[$(($i+1))]}
        i=$(($i+2))
    ;;
    "-h")
        usage_exit
    ;;
    *)
        # shellcheck disable=SC2086
        echo "err args_arr: "$args
        usage_exit
    ;;
    esac
done

# shellcheck disable=SC2006
# shellcheck disable=SC2038
# shellcheck disable=SC2086
lines=`find $base_path -name "*.java" | xargs cat | wc -l`
echo "java code lines: "$lines