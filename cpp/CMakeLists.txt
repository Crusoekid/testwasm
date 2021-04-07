cmake_minimum_required(VERSION 3.10)

project(helloworld)
set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -fdata-sections -fPIE -fstrict-aliasing -ffunction-sections -ffast-math -flax-vector-conversions -O3 -Wall -fsigned-char -fno-stack-protector -fopenmp -g")

include_directories(${CMAKE_CURRENT_LIST_DIR}/src)
file(GLOB srcpp src/*.cpp)

add_executable(helloworld ${srcpp})