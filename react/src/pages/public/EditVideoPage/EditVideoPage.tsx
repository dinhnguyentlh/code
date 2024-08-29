import React from "react";
import "./EditVideoPage.css";
import { FaPlus } from "react-icons/fa";
export default function EditVideoPage() {
  return (
    <div className="edit_video_page">
      <div className="import_video">
        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <label htmlFor="input_file">
              <FaPlus size={32} />
            </label>
            <input type="file" hidden name="file" id="input_file" />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxYMlNVjtkCtaYbqHF8ykAzEYyMsMEVNBaiJ_4dywuU6Pg8vK7gZ9CroWbMr8CRI09XM&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_CSSSwoaWEyn_BHZ_b2XX_-NvvNwtOuu1SkL-UqrNeansXrO_hHjo5LvrRkRBqUBZm4&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_CSSSwoaWEyn_BHZ_b2XX_-NvvNwtOuu1SkL-UqrNeansXrO_hHjo5LvrRkRBqUBZm4&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxYMlNVjtkCtaYbqHF8ykAzEYyMsMEVNBaiJ_4dywuU6Pg8vK7gZ9CroWbMr8CRI09XM&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxYMlNVjtkCtaYbqHF8ykAzEYyMsMEVNBaiJ_4dywuU6Pg8vK7gZ9CroWbMr8CRI09XM&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_CSSSwoaWEyn_BHZ_b2XX_-NvvNwtOuu1SkL-UqrNeansXrO_hHjo5LvrRkRBqUBZm4&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_CSSSwoaWEyn_BHZ_b2XX_-NvvNwtOuu1SkL-UqrNeansXrO_hHjo5LvrRkRBqUBZm4&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="import_video_wrapper">
          <div className="import_video_item import_file">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxYMlNVjtkCtaYbqHF8ykAzEYyMsMEVNBaiJ_4dywuU6Pg8vK7gZ9CroWbMr8CRI09XM&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="preview_video">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxYMlNVjtkCtaYbqHF8ykAzEYyMsMEVNBaiJ_4dywuU6Pg8vK7gZ9CroWbMr8CRI09XM&usqp=CAU"
          alt=""
        />
      </div>
      <div className="action_video">3</div>
    </div>
  );
}
