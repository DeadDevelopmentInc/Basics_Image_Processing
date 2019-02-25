package base;

import java.awt.image.BufferedImage;
import java.awt.image.WritableRaster;
import java.util.Hashtable;

public class supersampling {

    private int _targetWidth, _targetHeight, _samples;

    public supersampling(int targetWidth, int targetHeight, int samples){
        _targetWidth = targetWidth;
        _targetHeight = targetHeight;
        _samples = samples;
    }

    public BufferedImage processImage(BufferedImage image) {
        BufferedImage output = new BufferedImage(image.getColorModel(), image.getColorModel().createCompatibleWritableRaster(_targetWidth, _targetHeight), false, new Hashtable<String, Object>());
        WritableRaster sourceRaster = image.getRaster();
        WritableRaster targetRaster = output.getRaster();
        int sourceNumBands = sourceRaster.getNumBands();

        for(int x = 0; x < targetRaster.getWidth(); x ++) {
            for(int y = 0; y < targetRaster.getHeight(); y ++) {
                double[] newValues = new double[sourceNumBands];

                for(int i = 0; i < _samples; i++) {
                    for(int j = 0; j < _samples; j++) {
                        for(int k = 0; k < sourceNumBands; k++) {
                            newValues[k] += sourceRaster.getSample(x * _samples + i, y * _samples + j, k);
                            //double[] sourceValues = sourceRaster.getSa(x + i, y + j, new double[sourceNumBands]);
                            //for(int k = 0; k < sourceValues.length; k++) {
                            //	newValues[k] += sourceValues[k];
                            //}
                        }
                    }
                }

                for(int i = 0; i < newValues.length; i++) {
                    newValues[i] = newValues[i]/(_samples * _samples);
                    targetRaster.setSample(x, y, i, newValues[i]);
                }


            }


        }

        return output;
    }


}
