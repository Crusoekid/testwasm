#include <iostream>
#include "opencv2/opencv.hpp"

using namespace cv;

int main(int argc, char** argv)
{
    VideoCapture cap(0); // open the default camera
                         // cap.set(CV_CAP_PROP_FRAME_WIDTH, 1920);
    //cap.set(CV_CAP_PROP_FRAME_HEIGHT, 1080);
    if (!cap.isOpened()) // check if we succeeded
        return -1;
    bool inited = false;
    int w = 0;
    int h = 0;
    namedWindow("frame", 1);
    return 0;
}