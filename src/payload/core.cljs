(ns payload.core
  (:require [reagent.core :as r])))

(def pro (r/atom ""))
(def date (r/atom ""))
(def trk (r/atom ""))
(def origin (r/atom ""))
(def destination (r/atom ""))
(def revenue (r/atom 0))
(def total-revenue (r/atom 0))
(def advances (r/atom 0))
(def expenses (r/atom 0))
(def hours (r/atom 0))
(def total-hours (r/atom 0))
(def per-dm (r/atom 0))
(def total-per-dm (r/atom 0))
(def stops (r/atom 0))
(def total-stops (r/atom 0))
(def dh (r/atom 0))
(def total-dh (r/atom 0))
(def loaded (r/atom 0))
(def total-loaded (r/atom 0))
(def mi (r/atom 0))
(def total-mi (r/atom 0))
(def submitted (atom (sorted-map)))

(def counter (atom 0))

(defn add-input
  [input]
  (let [id (swap! counter inc)]
    (swap! submitted assoc id input)))

(defn input
  [type needs-dollar at]
  [:input {:type type
           :value (str (if (needs-dollar) "$" "") at "")}])

(defn previous-inputs
  []
  (for [[id value] submitted]
    [:tr
     [:td [input "type" false (:pro value)]]
     [:td [input "date" false (:date value)]]
     [:td [input "number" false (:trk value)]]
     [:td [input "text" false (:origin value)]]
     [:td [input "text" false (:destination value)]]
     [:td [input "text" true (:revenue value)]]
     [:td [input "text" false]]
     [:td [input "text" false (:stops value)]]
     [:td [input "text" false (:dh value)]]
     [:td [input "text" true (:hours value)]]
     [:td [input "text" false (:loaded value)]]
     [:td [input "text" false (:mi value)]]
     [:td [input "text" true (:per-dm value)]]
     [:td [input "text" true ((:revenue value) * 0.92)]]]))

(defn input-row
  []
  [:tr
   [:td [input "type" false @pro]]
   [:td [input "date" false @date]]
   [:td [input "number" false @trk]]
   [:td [input "text" false @origin]]
   [:td [input "text" false @destination]]
   [:td [input "text" true @revenue]]
   [:td [input "text" false]]
   [:td [input "text" false @stops]]
   [:td [input "text" false @dh]]
   [:td [input "text" true @hours]]
   [:td [input "text" false @loaded]]
   [:td [input "text" false @mi]]
   [:td [input "text" true @per-dm]]
   [:td [input "text" true (@revenue * 0.92)]]])


(defn total-row
  []
  [:tr
   [:td {:colspan "5"}]
   [:td [input "type" true (@total-revenue + @revenue)]]
   [:td]
   [:td [input "type" false (@total-stops + @stops)]]
   [:td [input "type" false (@total-dh + @dh)]]
   [:td [input "type" true (@total-hours + @hours)]]
   [:td [input "type" false (@total-loaded + @loaded)]]
   [:td [input "type" false (@total-mi + @mi)]]
   [:td [input "type" true (@total-per-dm + @per-dm)]]
   [:td [input "type" true ((@total-revenue + @revenue) * 0.92)]]])

(defn button
  []
  (let [
        pro-val @pro
        date-val @date
        trk-val @trk
        origin-val @origin
        destination-val @destination
        origin-val @origin
        revenue-val @revenue
        stops-val @stops
        dh-val @dh
        hours-val @hours
        loaded-val @loaded
        mi-val @mi
        per-dm-val @per-dm
        mi-val @mi
        ])
  [:button
   {:on-click #(add-input {:pro pro-val
                           :date date-val
                           :trk trk-val
                           :origin origin-val
                           :destination destination-val
                           :origin origin-val
                           :revenue revenue-val
                           :stops stops-val
                           :dh dh-val
                           :hours hours-val
                           :loaded loaded-val
                           :mi mi-val
                           :per-dm per-dm-val
                           :mi mi-val})}])

(defn full
  []
  [:div
   [previous-inputs]
   [input-row]
   [total-row]
   [button]])

(defn start
  "Mounts the necessary reagent component to document element with id 'id'"
  []
  (let [id "app"]
    (r/render full id)))
